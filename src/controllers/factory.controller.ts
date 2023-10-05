import { Request, Response } from "express";
import factoryService from "../services/factory.service";

export default class FactoryController{

    public async listAll(req: Request, res: Response){
        const result = await factoryService.listAll()
    return res.status(200).send(result);
    }

    public async create(req:Request, res:Response){
        try {
            const { name } = req.body

            const result = await factoryService.create(name)

            return res.status(result.code).send(result)
        } catch (error) {
            return res.status(400).send(error)
        }
    }
}