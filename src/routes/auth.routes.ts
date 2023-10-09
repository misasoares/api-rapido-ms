import { Router } from "express";
import UserController from "../controllers/user.controller";
import authMiddleware from "../middlewares/auth.middleware";
import AuthController from "../controllers/auth.controller";

export const authRoutes = () => {
  const router = Router();

  router.post("/", new AuthController().create);


  return router;
};
