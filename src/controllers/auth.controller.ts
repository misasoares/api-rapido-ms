import { Request, Response } from "express";
import userService from "../services/user.service";
import { v4 as uuid } from "uuid";

export default class AuthController {
  public async create(req: Request, res: Response) {
    const { email, paswsword } = req.body;

    const user = await userService.getUserByEmailAndPassword(email, paswsword);

    if (!user) {
      return res.status(401).send({ message: "Email or password wrong" });
    }

    const token = uuid();
    const update = await userService.update({ ...user, token });

    if (update.code === 200) {
      return res.status(200).send(update);
    }
  }
}
