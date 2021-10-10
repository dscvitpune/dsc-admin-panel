const localStraregy = require("passport-local").Strategy;
const { model } = require('mongoose');
const User = model('users');
const bcrypt = require('bcryptjs');

module.exports = (passport) => {
    passport.use(
        new localStraregy({ usernameField: "email" }, async (email, password, done) => {
            const existingUser = await User.findOne({ email });

            //check if account with the email exists
            if (!existingUser) return done(null, false, { message: "No account with this email" });

            //check if passwords match
            const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
            if (!isPasswordCorrect) return done(null, false, { message: "Incorrect Password" })

            return done(null, existingUser);

        })
    );

    passport.serializeUser((user, done) => {
        done(null, user.id)
    })

    passport.deserializeUser(async (id, done) => {
        const user = User.findById(id);
        if (!user)
        {
            done(null, false, { message: "No user found" });
        }
        done(null, user)
    })
}