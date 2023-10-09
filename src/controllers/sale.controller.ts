import { Request, Response } from "express";
import saleService from "../services/sale.service";

export default class SaleController {
  public async create(req: Request, res: Response) {
    try {
      const { batteryId, carId } = req.body;
      const { token } = req.headers;
        const tokenAsString = token as string

      const sale = await saleService.create({ batteryId, carId, tokenAsString });

      return res.status(200).send(sale)
    } catch (error) {
      return res.status(400).send(error);
    }
  }
}
