import express from "express";
import { authenticateRoute } from "../auth/auth.js";
import { renderDash, deleteFav } from "../controllers/dashController.js";

export const dashRouter = express.Router();

dashRouter.route("/dashboard").get(authenticateRoute, renderDash);
dashRouter.route("/delete").post(deleteFav);
