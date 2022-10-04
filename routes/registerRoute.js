import express from "express";
import {
  renderRegister,
  registerUser,
} from "../controllers/registerController.js";

export const registerRouter = express.Router();

registerRouter.route("/register").get(renderRegister).post(registerUser);
