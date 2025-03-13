import { Request, Response } from "express";
import { User } from "../models/user.model";

let mockUser = [
  {
    id: 1,
    firstName: "David",
    lastName: "Dyberg",
    email: "david@example.com",
    password: "$2b$10$eW5U7nH8PqZ6Kl.kp3H7KO6u2qIX.4m06zcdzWZFYumXxF5jP0dFm",
    phoneNumber: "+46701234567",
    age: 23,
    bio: "Fullstack Developer passionate about web technologies.",
    profileImage: "",
    skills: ["JavaScript", "React", "Tailwind CSS", "Node.js", "MongoDB"],
    socials: {
      github: "https://github.com/daviddyberg",
      linkedin: "https://linkedin.com/in/daviddyberg",
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const getUser = (req: Request, res: Response) => {
  res.json(mockUser);
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      age,
      bio,
      profileImage,
      skills,
      socials,
      phoneNumber,
    } = req.body;
    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
      age,
      bio,
      profileImage,
      skills,
      socials,
      phoneNumber,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    await newUser.save();
    res.status(201).json({ message: "User created" });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const updateUser = (req: Request, res: Response) => {
  mockUser[0] = { ...mockUser[0], ...req.body, updatedAt: new Date() };
  res.json({ message: "User updated successfully", user: mockUser[0] });
};
