const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const passport = require("passport");
const User = mongoose.model("users");


const signUp = async (req, res) => {
    const { firstName, lastName, email, password, confirmPassword } = req.body;
    const userName = firstName + " " + lastName;
    try
    {
        const testEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]*@+vit+(?:\.edu)*$/;
        if (!testEmail.test(email))
        {
            throw "your email must be a valid vit.edu email";
        }
        const existingUser = await User.findOne({ email: email });
        if (existingUser)
        {
            console.log("user exists \n");
            console.log(existingUser);
            throw "User already exists";
        } else if (password !== confirmPassword)
        {
            throw "Passwords don't match";
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = await new User({
            userName,
            email,
            password: hashedPassword
        }).save();
        console.log('new User: ');
        console.log(newUser);
        req.flash("success_msg", "You are registered. You can now login");
        res.redirect("/login");

    } catch (e)
    {
        console.log(`error from signup controller: ${e}`);
        req.flash("error", e);
        res.redirect("/signup");
    }
}

const logIn = (req, res, next) => {
    debugger;
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/signin',
        failureFlash: true
    })(req, res, next);
};

const logOut = (req, res) => {
    req.logout();
    res.redirect("/dashboard");
}

exports.signUp = signUp;
exports.logIn = logIn;
exports.logOut = logOut;