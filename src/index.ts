import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";

import loginRoutes from "./controllers/login";
import githubRoutes from "./controllers/github";
import userRoutes from "./controllers/user";

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.use(
  cors({
    origin: "http://localhost:3000",
    // Allow follow-up middleware to override this CORS for options
    preflightContinue: true,
  })
);

app.use("/login", loginRoutes);

app.use("/github", githubRoutes);

app.use("/user", userRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
