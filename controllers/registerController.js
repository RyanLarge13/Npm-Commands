import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";

export const renderRegister = async (req, res) => {
  res.render("html/register");
};

export const registerUser = async (req, res) => {
  try {
    await User.findOne({ Username: req.body.registerName })
      .then((user) => {
        if (!user) {
          const newUser = new User({
            Username: req.body.registerName,
            Email: req.body.registerEmail,
            Password: req.body.registerPassword,
          });
          newUser.save();
          res.status(200);
        } else {
          res.status(400).json({ message: "This user already exists." });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({ Error: err });
      });
  } catch (err) {
    console.log(err);
    res.status(400).json({ Error: err });
  }
};
