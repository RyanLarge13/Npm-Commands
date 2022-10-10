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