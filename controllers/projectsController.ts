import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

let mockProjects = [
  {
    id: 1,
    title: "IMDB Clone",
    description: "A website for managing your favorite movies",
    techStack: ["PHP", "Laravel", "MariaDB"],
    githubLink: "https://github.com/example",
    liveDemo: "example.vercel.app",
    image: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    title: "Todo list",
    description: "A website for managing your todos",
    techStack: ["PHP", "MariaDB"],
    githubLink: "https://github.com/example",
    liveDemo: "example.vercel.app",
    image: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const getAllProjects = (req: Request, res: Response) => {
  res.json(mockProjects);
};

export const getProjectById = (req: Request, res: Response) => {
  const project = mockProjects.find(
    (project) => project.id === parseInt(req.params.id)
  );
  res.json(project);
};

export const createProject = (req: Request, res: Response) => {
  const newProject = {
    id: uuidv4(),
    ...req.body,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  mockProjects.push(newProject);
  res.status(201).json({ message: "Project created successfully" });
};

export const updateProject = (req: Request, res: Response) => {
  const projectId = parseInt(req.params.id);
  const projectIndex = mockProjects.findIndex(
    (project) => project.id === projectId
  );

  if (projectIndex === -1) {
    res.status(404).json({ message: "Project not found" });
  }

  const updatedProject = {
    ...mockProjects[projectIndex],
    ...req.body,
    updatedAt: new Date(),
  };

  mockProjects[projectIndex] = updatedProject;
  res
    .status(200)
    .json({ message: "Project updated successfully", project: updatedProject });
};

export const deleteProject = (req: Request, res: Response) => {
  mockProjects = mockProjects.filter(
    (project) => project.id != parseInt(req.params.id)
  );
  res.json({ message: "Project was deleted successfully " });
};
