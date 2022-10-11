import passport from "passport";
import { User } from "../models/userModel.js";

export const renderLogin = (req, res) => {
  res.render("html/login");
};

export const loginHandle = (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
  })(req, res, next);
};

export const logout = (req, res) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) res.send('Unable to logout.');
      else res.render('html/login', {
        success: 'You have successfully logged out',
      });
    });
  } else {
    res.end();
  }
};  