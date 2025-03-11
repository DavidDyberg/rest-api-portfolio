import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import connectDB from "../database/db";

dotenv.config();
connectDB();

const app: Express = express();
const PORT: string | number = process.env.PORT || 4000;

app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
  res.send("Hejsan");
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
