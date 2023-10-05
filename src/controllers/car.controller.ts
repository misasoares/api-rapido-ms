import { Request, Response } from "express";
import carService from "../services/car.service";
import repository from "../database/prisma.database";

export default class CarController{
    public async list(req:Request, res:Response){
        const result = await carService.list()

        return res.status(200).send(result)
    }

    public async create(req:Request, res:Response){
        try {
            const {name, yearFabrication, factoryId, batteryId} = req.body

            const result = await carService.create({
                name, yearFabrication,factoryId, batteryId
            })

            return res.status(result.code).send(result);
        } catch (error) {
            return res.status(400).send(error);
        }
    }
}