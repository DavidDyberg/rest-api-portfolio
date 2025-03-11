import { Router } from "express";
import { getUser, updateUser } from "../controllers/userController";
import {
  createProject,
  deleteProject,
  getAllProjects,
  getProjectById,
  updateProject,
} from "../controllers/projectsController";

export const router = Router();

router.get("/about", getUser);
router.put("/about", updateUser);

router.get("/projects", getAllProjects);
router.get("/projects/:id", getProjectById);
router.post("/projects", createProject);
router.put("/projects/:id", updateProject);
router.delete("/projects/:id", deleteProject);
