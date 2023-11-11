import { Router } from "express";
import BatteryController from "../controllers/battery.controller";

export const batteryRoutes = () => {
  const router = Router();

  router.post("/criar", new BatteryController().create);
  router.get('/pegar', new BatteryController().list)
  
  return router;
};
