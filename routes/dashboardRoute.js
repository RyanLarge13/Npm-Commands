import express from "express";
import {
    renderDashboard
} from '../controllers/dashboardController.js';

export const dashRouter = express.Router();

dashRouter.route('/dashboard').get(renderDashboard);