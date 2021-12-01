const { home, signIn } = require('../controllers/views');

module.exports = (app) => {
    app.get('/', home);
    app.get('/signIn', signIn);
}