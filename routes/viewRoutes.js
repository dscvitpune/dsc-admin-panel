const { home, signIn } = require('../controllers/views');

module.exports = (app) => {
    app.get('/', home);
    app.get('/signIn', signIn);
    app.get('/projectView', (req, res) => {
        res.render('pages/projects');
    });
}