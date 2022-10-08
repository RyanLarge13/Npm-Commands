import jwt from 'jsonwebtoken';
import { User } from '../models/userModel.js';
import dotenv from 'dotenv';
dotenv.config();

export const protect = async (req, res, next) => {
    const token = req.header('Authorization').split(' ')[1];
    
    jwt.verify(token, process.env.JWT_SECRET);
};
