import express, { Express, Request, Response } from "express";
import helmet from "helmet";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { membersRouter } from "./modules/members/members.router";
import { customersRouter } from "./modules/customers/customers.router";
import { shoppingCartRouter } from "./modules/shoppingCart/shoppingCart.router";
import { productsRouter } from "./modules/products/products.router";

dotenv.config();

const app: Express = express();
const port = process.env.DEV_PORT || 3000;

app.use(helmet());
app.use(express.json());
app.use(cookieParser());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  next();
});

app.use("/api/customers", customersRouter);
app.use("/api/members", membersRouter);
app.use("/api/shopping-cart", shoppingCartRouter);
app.use("/api/products", productsRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
