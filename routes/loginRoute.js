import express from "express";
import { protect } from "../auth/auth.js";
import {
  renderLogin,
  login,
  renderPosts,
} from "../controllers/loginController.js";

export const loginRouter = express.Router();

loginRouter.route("/login").get(renderLogin).post(login);
loginRouter.route('/login/posts').get(protect, renderPosts);
