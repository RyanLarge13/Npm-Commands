import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const renderLogin = (req, res) => {
  res.render("html/login");
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ Email: email });

  if (user && (await bcrypt.compare(password, user.Password))) {
    jwt.sign(
      { user },
      process.env.JWT_SECRET,
      {
        expiresIn: "60s",
      },
      async (err, token) => {
        if (err) {
          console.log(err);
          res.status(401).json({
            message:
              "Sorry, but this is just not working. Instead of coding why don't you go fuck yourself?",
          });
        } else {
          console.log(token);
          res.set({ Authorization: `Bearer ${token}` });
          res.render("html/dashboard", {
            name: user.Username,
          });
        }
      }
    );
  } else {
    res.render("html/login", {
      err: "Username or Password is incorrect",
    });
  }
};

export const renderPosts = (req, res) => {};
