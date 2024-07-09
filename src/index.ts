import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

import userRoutes from "./controllers/user";


const app: Express = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.use("/users", userRoutes);


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
