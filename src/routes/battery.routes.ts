import { Router } from "express";
import BatteryController from "../controllers/battery.controller";

export const batteryRoutes = () => {
  const router = Router();

  router.post("/create", new BatteryController().create);

  return router;
};
