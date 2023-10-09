import { Router } from "express"
import FactoryController from "../controllers/factory.controller"
import CarController from "../controllers/car.controller"


export const carRoutes = ()=>{
    const router = Router()

    router.post('/create', new CarController().create)
    router.get('/list', new CarController().list)
    router.post('/add-battery-to-car', new CarController().addBatteryToCar)



    return router
}