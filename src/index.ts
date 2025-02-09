import express from "express";
import { connectDB } from "./startup/db";
import middlewares from "./startup/middlewares";
import routes from "./startup/routes";

const app = express();

middlewares(app);
routes(app);
connectDB();

export default app;
