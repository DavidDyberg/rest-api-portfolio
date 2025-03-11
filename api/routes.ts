import { Router } from "express";
import { getUser, updateUser } from "../controllers/userController";

export const router = Router();

router.get("/about", getUser);
router.put("/about", updateUser);
