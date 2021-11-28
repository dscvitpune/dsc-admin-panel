const { home } = require('../controllers/views');

module.exports = (app) => {
    app.get('/', home);
}