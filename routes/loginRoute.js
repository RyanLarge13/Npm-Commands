import express from "express";
import { renderLogin, loginUser } from "../controllers/loginController.js";

export const loginRouter = express.Router();

loginRouter
  .route("/login")
  .get(renderLogin)
  .post(loginUser);
