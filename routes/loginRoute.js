import express from "express";
import {
  renderLogin,
  login,
} from "../controllers/loginController.js";

export const loginRouter = express.Router();

loginRouter.route("/login").get(renderLogin).post(login);
