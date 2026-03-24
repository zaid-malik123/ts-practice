import type { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config.js"

import User from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { TryCatch } from "../utils/AsyncHandler.js";

const generateToken = (id: string, role: string) => {

  return jwt.sign({ id, role }, "zaidmalik", {
    expiresIn: "7d",
  });
};

const register = TryCatch(async (req: Request, res: Response) => {
  const { userName, email, password } = req.body;

  if (!userName || !email || !password) {
    throw new ApiError(400, "All fields are required");
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new ApiError(400, "User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    userName,
    email,
    password: hashedPassword,
  });

  const token = generateToken(user._id.toString(), user.role);
  res.cookie("token", token)

  return res.status(201).json(
    new ApiResponse(201, {
      user: {
        _id: user._id,
        userName: user.userName,
        email: user.email,
      },
      token,
    }, "User registered successfully")
  );
});

const login = TryCatch(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, "Email and password are required");
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw new ApiError(404, "User not found");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new ApiError(401, "Invalid credentials");
  }

  const token = generateToken(user._id.toString(), user.role);

  res.cookie("token", token)

  return res.status(200).json(
    new ApiResponse(200, {
      user: {
        _id: user._id,
        userName: user.userName,
        email: user.email,
      },
      token,
    }, "Login successful")
  );
});

const logout = TryCatch(async (req: Request, res: Response) => {

  res.clearCookie("token")

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Logout successful"));
});

const getMe = TryCatch(async (req: any, res: Response) => {
  const user = await User.findById(req.user.id).select("-password");

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, user, "User fetched successfully"));
});

export { register, login, logout, getMe };