import { NextFunction, Request, Response } from "express";
import { Schema } from "joi";
import { ApiResponse } from "../models/ApiResponse";

export const validate = (
  schema: Schema
): ((req: Request, res: Response, next: NextFunction) => void) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      res
        .status(400)
        .json(new ApiResponse(false, error.details, "Invalid Data", 400));
      return;
    }

    next();
  };
};
