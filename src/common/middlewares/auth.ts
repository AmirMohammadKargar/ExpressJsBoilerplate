import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { config } from "../config";
import { ApiResponse } from "../models/ApiResponse";

interface AuthRequest extends Request {
  user?: any;
}

export const authenticate = (): ((
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => void) => {
  return (req: AuthRequest, res: Response, next: NextFunction): void => {
    const token = req.header("Authorization")?.split(" ")[1]; // Expecting "Bearer TOKEN"

    if (!token) {
      res
        .status(401)
        .json(
          new ApiResponse(false, null, "Access denied. No token provided.", 401)
        );
      return;
    }

    try {
      const decoded = jwt.verify(token, config.jwtSecret ?? "");
      req.user = decoded;
      next();
    } catch (error) {
      res
        .status(403)
        .json(new ApiResponse(false, null, "Invalid or expired token.", 403));
    }
  };
};
