import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { ApiError } from "../utils/ApiError.js";

export const isAuthenticated = (
  req: any,
  _: any,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1] || req.cookies.token;

  if (!token) {
    return next(new ApiError(401, "Unauthorized"));
  }

  try {
    const decoded = jwt.verify(
      token,
      "zaidmalik" as string
    ) as any;

    req.user = decoded;
    next();
  } catch (error) {
    console.log(error)
    return next(new ApiError(401, "Invalid token"));
  }
};

export const authorizeRoles = (...roles: string[]) => {

  return (req: any, res: Response, next: NextFunction) => {

    if(!roles.includes(req.user.role)) {

      throw new ApiError(404, "forbidden request")
    }

  }

}