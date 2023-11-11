import { Router } from "express";
import UserController from "../controllers/user.controller";
import authMiddleware from "../middlewares/auth.middleware";
import AuthController from "../controllers/auth.controller";

export const authRoutes = () => {
  const router = Router();

  router.post("/login", new AuthController().create);
  router.get('/logout', authMiddleware ,new AuthController().delete)


  return router;
};
