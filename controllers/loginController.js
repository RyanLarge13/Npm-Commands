import passport from "passport";
import { User } from "../models/userModel.js";

export const renderLogin = (req, res) => {
  res.render("html/login");
};

export const loginHandle = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);
    if (!user)
      return res.render("html/login", {
        err: info.message,
      });
    if (user)
      req.logIn(user, (err) => {
        if (err) return next(err);
        res.render("html/dashboard", {
          name: user.Username,
          favorites: user.FavoriteCommands,
        });
      });
  })(req, res, next);
};

export const logout = (req, res) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) res.send("Unable to logout.");
      else
        res.render("html/login", {
          success: "You have successfully logged out",
        });
    });
  } else {
    res.end();
  }
};
