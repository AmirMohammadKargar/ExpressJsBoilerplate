import { Express } from "express";
import userRoutes from "../modules/user/presentation/routes/UserRoute";

export default function (app: Express) {
  app.use("/users", userRoutes);
}
