import express from "express";
import {
  loginHandle,
  renderLogin,
  logout,
} from "../controllers/loginController.js";

export const loginRouter = express.Router();

loginRouter.route("/login").get(renderLogin).post(loginHandle);
loginRouter.route("/logout").get(logout);
