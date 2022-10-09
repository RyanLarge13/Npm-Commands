import express from "express";
import {
  loginHandle,
  renderLogin,
} from "../controllers/loginController.js";

export const loginRouter = express.Router();

loginRouter.route("/login").get(renderLogin).post(loginHandle);
