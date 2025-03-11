import { Request, Response } from "express";

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
  },
];

export const getUser = (req: Request, res: Response) => {
  res.json(mockUser);
};

export const createUser = (req: Request, res: Response) => {
  const newUser = {};
};
