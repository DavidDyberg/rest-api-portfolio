import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import connectDB from "../database/db";
import { userRouter } from "./userRoutes";
import { projectRouter } from "./routes/projectRoutes";

dotenv.config();
connectDB();

const app: Express = express();
const PORT: string | number = process.env.PORT || 8000;

app.use(express.json());
app.use("/api", userRouter);
app.use("/api", projectRouter);

app.get("/", async (req: Request, res: Response) => {
  res.send("Hejsan");
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
