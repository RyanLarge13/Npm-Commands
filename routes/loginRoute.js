import express from "express";

export const loginRouter = express.Router();

loginRouter.route('/login').get(renderLogin).post(loginUser);
