import express from "express";
import mongoose from "mongoose";
import ejs from "ejs";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
dotenv.config();
import { router } from "./routes/commandRoutes.js";
import { registerRouter } from "./routes/registerRoute.js";
import bodyParser from "body-parser";
import path from "path";

const PORT = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static("views"));
app.use("/", router);
app.use("/", registerRouter);

connectDB();

app.listen(PORT, () => console.log(`Your app is running on port ${PORT}`));
