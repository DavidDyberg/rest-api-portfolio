import express, { Express, Request, Response } from "express";

const app: Express = express();
const PORT: string | number = 4000;

app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
  res.send("Hejsan");
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
