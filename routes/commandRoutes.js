import express from "express";

import {
  getAllCommands,
  postCommand,
} from "../controllers/commandController.js";

export const router = express.Router();

router.route("/").get(getAllCommands).post(postCommand);
