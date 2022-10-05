import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { User } from "./models/userModel.js";
import { connectDB } from "./config/db.js";
import { router } from "./routes/commandRoutes.js";
import { registerRouter } from "./routes/registerRoute.js";
// import { loginRouter } from "./routes/loginRoute.js";
import { initialize } from "./auth/passport.js";
import passport from "passport";
import flash from "express-flash";
import session from "express-session";
initialize(passport, (id) =>
  User.find({ _id: id }).then((user) => {
    return user;
  })
);
dotenv.config();

const PORT = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(flash());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.set("view engine", "ejs");
app.use(express.static("views"));
// app.use("/", router, registerRouter, loginRouter);
app.use("/", router, registerRouter);

app.get("/login", (req, res) => {
  res.render("html/login");
});

app.get("/dashboard", (req, res) => {
  /* console.log(req.user[0].Username);
  res.render("html/dashboard", {
    name: req.user.Username,
  }); */
  User.findOne({ Username: req.user[0].Username }).then((user) => {
    if (!user) console.log("ERROR!!!!!!!!!");
    else {
      res.render("html/dashboard", {
        name: user.Username,
      });
    }
  });
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

connectDB();

app.listen(PORT, () => console.log(`Your app is running on port ${PORT}`));
