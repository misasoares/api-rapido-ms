import { Request, Response } from "express";
import batteryService from "../services/battery.service";

export default class BatteryController {
  public async list(req: Request, res: Response) {
    try {
      const result = await batteryService.listAll();
      return res.status(200).send(result);
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  public async create(req: Request, res: Response) {
    try {
      const { name, amper, cca, warranty, quantity, price } = req.body;

      const result = await batteryService.create({
        name,
        amper,
        cca,
        warranty,
        quantity,
        price,
      });

      return res.status(result.code).send(result);
    } catch (error) {
      return res.status(400).send(error);
    }
  }
}
