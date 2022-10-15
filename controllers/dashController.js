import { User } from "../models/userModel.js";

export const renderDash = (req, res) => {
  res.render("html/dashboard", {
    name: req.user.Username,
    favorites: req.user.FavoriteCommands,
  });
};

export const deleteFav = async (req, res) => {
  const user = req.user;
  const id = req.body.title;
  User.findOneAndUpdate(
    { Username: user.Username },
    {
      $pull: {
        FavoriteCommands: { Title: id },
      },
    },
    { safe: true, new: true },
    (err, obj) => {
      if (err) console.log(err);
      else res.status(204).redirect("/dashboard");
    }
  );
};
