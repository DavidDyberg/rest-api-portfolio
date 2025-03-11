import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import connectDB from "../database/db";
import { router } from "./routes";

dotenv.config();
connectDB();

const app: Express = express();
const PORT: string | number = process.env.PORT || 8000;

app.use(express.json());
app.use("/api", router);

app.get("/", async (req: Request, res: Response) => {
  res.send("Hejsan");
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
