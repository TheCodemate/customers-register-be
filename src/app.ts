import express, { Express, Request, Response } from "express";
import helmet from "helmet";
import dotenv from "dotenv";
import { membersRouter } from "./modules/members/members.router";

dotenv.config();

const app: Express = express();
const port = process.env.DEV_PORT || 3000;

app.use(helmet());
app.use(express.json());
app.use("/api/members", membersRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
