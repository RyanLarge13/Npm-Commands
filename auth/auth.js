import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const authenticateToken = async (req, res, next) => {
    console.log(req.headers)
    const authHeader = await req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) res.status(401).json({ message: 'No token in header' });
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            console.log(err)
            return res.status(403).json({ message: 'There is a token, but it is not valid and you do not have access' });
        }
        req.user = user;
        next();
    })
};