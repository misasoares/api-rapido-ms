import { Request, Response } from "express";
import userService from "../services/user.service";

export default class UserController {
  public async list(req: Request, res: Response) {
    const result = await userService.listAll()
    return res.status(200).send(result);
  }

  public async create(req: Request, res: Response) {
    try {
        const {name, address,password, phone , cpf } = req.body

        const result = await userService.create({
            name, phone, address, cpf, password
        })

        return res.status(result.code).send(result)

    } catch (error:any) {
        res.status(500).send({
            ok: false,
            message: error.toString(),
        });
    }
  }

  public show(req: Request, res: Response) {}

  public update(req: Request, res: Response) {}

  public delete(req: Request, res: Response) {}
}
