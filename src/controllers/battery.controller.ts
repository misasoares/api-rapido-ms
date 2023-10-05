import { Request, Response } from "express";
import batteryService from "../services/battery.service";

export default class BatteryController {
  public async create(req: Request, res: Response) {
    try {
      const { name, cca, warranty, quantity, price } = req.body;

      const result = await batteryService.create({
        name, cca, warranty, quantity, price,
      });

      return res.status(result.code).send(result);
    } catch (error) {
      return res.status(400).send(error);
    }
  }
}
