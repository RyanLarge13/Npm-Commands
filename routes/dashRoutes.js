import express from "express";
import { authenticateRoute } from "../auth/auth.js";
import { renderDash } from "../controllers/dashController.js";

export const dashRouter = express.Router();

dashRouter.route("/dashboard").get(authenticateRoute, renderDash);
