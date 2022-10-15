import { Command } from "../models/commandModel.js";
import { User } from "../models/userModel.js";

export const getAllCommands = async (req, res) => {
  try {
    const allCommands = await Command.find({});
    res.status(200).render("index", {
      user: req.user,
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
    res.status(200).redirect('/');
  } catch (err) {
    console.log(err);
  }
};

export const addFav = async (req, res) => {
  const title = req.query.title;
  const user = req.user;
  const command = await Command.findOne({ command: title });
  user.FavoriteCommands.push(command);
  user.save();
  res.redirect('/');
};
