import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { connectDB } from "./config/db.js";
import { router } from "./routes/commandRoutes.js";
import { registerRouter } from "./routes/registerRoute.js";
import { loginRouter } from './routes/loginRoute.js';
import childProcess from "child_process";
dotenv.config();

const PORT = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static("views"));
app.use("/", router, registerRouter, loginRouter);

connectDB();

app.listen(PORT, () => {
  // childProcess.exec('start http://localhost:8080/');
  console.log(`Your app is running on port ${PORT}`);
});
