import bcrypt from 'bcryptjs';
import localStrategy from 'passport-local';
import { User } from '../models/userModel.js';
localStrategy.Strategy;

export const initialize =  (passport, getUserById) => {
    const authenticateUser = (email, password, done) => {
        User.findOne({ Email: email }).then(async (user) => {
            if (!user) return done(null, false, { message: 'No user with that email.'})
            try {
                if (await bcrypt.compare(password, user.Password)) {
                    return done(null, user);
                } else {
                    return done(null, false, { message: 'Password is incorrect'});
                }
            } catch (err) {
                return done(err);
            }
        });
    };

    passport.use(new localStrategy({ usernameField: 'email' }, authenticateUser));
    passport.serializeUser((user, done) => done(null, user._id));
    passport.deserializeUser((id, done) => {
        return done(null, getUserById(id))
    });

};