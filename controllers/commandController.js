import { Command } from "../models/commandModel.js";

export const getAllCommands = async (req, res) => {
  try {
    const allCommands = await Command.find({});
    res.status(200).render("index", {
      commands: allCommands,
    });
  } catch (err) {
    console.log(err);
  }
};

export const postCommand = async (req, res) => {
  try {
    const newCommand = new Command({
      Command: req.body.command,
      Description: req.body.desc,
    });
    newCommand.save();
    res.status(200);
  } catch (err) {
    console.log(err);
  }
};
