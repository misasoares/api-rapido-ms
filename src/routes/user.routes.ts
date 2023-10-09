import { Router } from "express";
import UserController from "../controllers/user.controller";
import authMiddleware from "../middlewares/auth.middleware";

export const userRoutes = () => {
  const router = Router();

  router.get("/list", authMiddleware, new UserController().list);
  router.post("/create", new UserController().create);

  return router;
};
