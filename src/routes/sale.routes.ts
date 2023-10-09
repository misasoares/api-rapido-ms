import { Router } from "express"
import SaleController from "../controllers/sale.controller"

export const saleRoutes = () =>{
    const router = Router()

    router.post('/create', new SaleController().create)

    return router
}