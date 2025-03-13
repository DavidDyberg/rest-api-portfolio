import { Router } from "express";
import {
  createUser,
  getUser,
  updateUser,
} from "../../controllers/userController";

export const userRouter = Router();

userRouter.get("/about", getUser);
userRouter.post("/about", createUser);
userRouter.put("/about", updateUser);
