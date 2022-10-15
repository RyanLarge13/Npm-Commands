import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import { connectDB } from "./config/db.js";
import { router } from "./routes/commandRoutes.js";
import { registerRouter } from "./routes/registerRoute.js";
import { loginRouter } from "./routes/loginRoute.js";
import { authorize } from "./auth/passport.js";
import { dashRouter } from "./routes/dashRoutes.js";
dotenv.config();
authorize(passport);

const PORT = process.env.PORT || 8080;
const app = express();

app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static("views"));
app.use(passport.initialize());
app.use(passport.session());
app.use("/", router, registerRouter, loginRouter, dashRouter);

connectDB();

app.listen(PORT, () => {
  console.log(`Your app is running on port ${PORT} : http://localhost:8080/`);
});
