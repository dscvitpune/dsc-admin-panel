module.exports = {
    restrictUnauth: (req, res, next) => {
        if (!req.isAuthenticated())
        {
            req.flash("error_msg", "You need to be logged in");
            res.redirect("/signin");
        } else
        {
            next();
        }
    },
    forwardAuth: (req, res, next) => {
        if (req.isAuthenticated())
        {
            return res.redirect("/");
        } else
        {
            next();
        }
    }
}