import { User } from "../models/userModel.js";
import bcrypt from 'bcrypt';

export const renderLogin = async (req, res) => {
    res.render('html/login');
};

export const loginUser = async (req, res) => {
    try {
        await User.findOne({ Email: req.body.loginEmail }).then((user) => {
            if (user) {
                bcrypt.compare(req.body.password, user.Password, (err, result) => {
                    if (err) console.log(err);
                    if (result) {
                        const name = user.Username;
                        console.log('Password matches!!!!');
                        res.render('html/dashboard', {
                            name: name
                        });
                    } 
                    else console.log('Password does not match');
                });
            } else {
                res.status(400).json({ Error: `A user with the email of ${req.body.email} does not exist.`});
            }
        }).catch((err) => {
            console.log(err);
            res.status(400).json({ Error: err });
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({ Error: err });
    }
};