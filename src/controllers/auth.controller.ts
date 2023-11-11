import { Request, Response } from "express";
import userService from "../services/user.service";
import { v4 as uuid } from "uuid";

export default class AuthController {
  public async create(req: Request, res: Response) {
    const { email, password } = req.body;

    const user = await userService.getUserByEmailAndPassword(email, password);

    if(user.code === 401){
       return res.status(401).send(user);
    }

    const token = uuid();
   
    const update = await userService.update({ ...user.data, token });

    if (update.code === 200) {
      return res.status(200).send(update);
    }
  }

  public async delete(req: Request, res: Response) {
    const { token } = req.headers;

    const user = await userService.getByToken(token as string);

    if (user) {
      await userService.update({ ...user.data, token: null });

      return res.status(200).send({ message: "Logout success." });
    }

    return res.status(404).send({ message: "Logout not found" });
  }
}
