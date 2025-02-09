import cors from "cors";
import express, { Express } from "express";
import morgan from "morgan";

export default function (app: Express) {
  app.use(express.json());
  app.use(cors());
  app.use(morgan("dev"));
}
