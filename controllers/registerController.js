import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";

export const renderRegister = async (req, res) => {
  res.render("html/register");
};

export const registerUser = async (req, res) => {
  try {
    const hash = await bcrypt.hash(req.body.password, 10);
    await User.findOne({ Username: req.body.username })
      .then((user) => {
        if (!user) {
          const newUser = new User({
            Username: req.body.username,
            Email: req.body.email,
            Password: hash,
          });
          newUser.save();
          res.status(200).redirect('/login');
        } else {
          res.status(400).json({ message: "This user already exists." });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(400).redirect('/register');
      });
  } catch (err) {
    console.log(err);
    res.status(400).json({ Error: err });
  }
};
