import express from "express";
import { renderDash } from "../controllers/dashController.js";

export const dashRouter = express.Router();

dashRouter.route('/dashboard').get(renderDash);