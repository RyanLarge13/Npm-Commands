import express from "express";
import {
  getAllCommands,
  postCommand,
  addFav,
} from "../controllers/commandController.js";

export const router = express.Router();

router.route("/").get(getAllCommands).post(postCommand);
router.route('/add').get(addFav);