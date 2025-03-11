import { Router } from "express";
import { getUser } from "../controllers/userController";

export const router = Router();

router.get("/about", getUser);
