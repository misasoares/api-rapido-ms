import { Request, Response } from "express";

export default class UserController {
  public list(req: Request, res: Response) {
    return res.status(200).send({
      success: true,
      message: "Listagem de usuário",
      data: [],
    });
  }

  public create(req: Request, res: Response) {}

  public show(req: Request, res: Response) {}

  public update(req: Request, res: Response) {}

  public delete(req: Request, res: Response) {}
}
