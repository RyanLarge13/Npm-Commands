import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { User } from "../models/userModel.js";
dotenv.config();

export const protect = async (req, res, next) => {
  console.log(req.headers);
  //const token = req.header('Authorization').split(' ')[1];
  //jwt.verify(token, process.env.JWT_SECRET);
};
