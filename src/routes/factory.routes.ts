import { Router } from "express"
import FactoryController from "../controllers/factory.controller"


export const factoryRoutes = ()=>{
    const router = Router()

    router.post('/create', new FactoryController().create)
    router.get('/list-all', new FactoryController().listAll)

    return router
}