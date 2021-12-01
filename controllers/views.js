
const home = (req, res) => {
    res.render('pages/index');
}

const signIn = (req, res) => {
    res.render('pages/sign-in');
}

module.exports = {
    home,
    signIn
}