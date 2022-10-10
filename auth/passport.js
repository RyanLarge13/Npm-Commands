import localStrategy from 'passport-local';
import bcrypt from 'bcryptjs';
import { User } from '../models/userModel.js';
localStrategy.Strategy;

export const authorize = (passport) => {
    passport.use(
        new localStrategy({ usernameField: 'email' }, async (email, password, done) => {
            await User.findOne({ Email: email }).then( async (user) => {
                if (!user) done(null, false, { message: 'That email is not registered to an account.' });
                await bcrypt.compare(password, user.Password).then((isMatch) => {
                    if (isMatch) {
                        done(null, user);
                    } else {
                        done(null, false, { message: 'Your password is incorrect.'});
                    }
                });
            }).catch((err) => console.log(err));
        })
    );

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        });
    });
};

