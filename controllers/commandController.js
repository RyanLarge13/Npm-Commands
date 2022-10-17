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
      Title: req.body.title,
      Description: req.body.desc,
    });
    newCommand.save();
    res.status(200).redirect("/");
  } catch (err) {
    console.log(err);
  }
};

export const addFav = async (req, res) => {
  const id = req.body.id;
  const user = req.user;
  await Command.findById(id)
    .then((command) => {
      const allCommands = [...user.FavoriteCommands];
      const check = allCommands.find((com) => com.Title === command.Title);
      if (check !== undefined) {
        return res.status(204).send()
      }
      user.FavoriteCommands.push(command);
      user.save();
      res.status(204).send();
    })
    .catch((err) => {
      console.log(err);
    });
};
