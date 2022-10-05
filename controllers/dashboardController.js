import { User } from "../models/userModel.js";

export const renderDashboard = async (req, res) => {
  res.render("html/dashboard");
};
