import { Router } from "express";
import UserController from "../controllers/user.controller";
import authMiddleware from "../middlewares/auth.middleware";

export const userRoutes = () => {
  const router = Router();

  router.get("/", authMiddleware, new UserController().list);
  router.post("/", new UserController().create);
  router.get('/get-user-logged', authMiddleware, new UserController().show)

  return router;
};
