const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');

require('dotenv').config();

require("./Models/user_model");
require("./Models/event_model");
require("./Models/member_model");
require('./services/passport')(passport);

const app = express();
const PORT = 5000 || process.env.PORT;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Express session
app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    })
);
  
// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
})

const uri = process.env.ATLAS_URI;
mongoose.Promise = global.Promise;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
    console.log("Connected to Mongo");
}).catch(e => {
    console.error(e);
})

//connecting route handlers
require("./routes/authRoutes")(app);
require("./routes/eventRoutes")(app);
require("./routes/memberRoutes")(app);

app.listen(PORT, () => {
    console.log(`🚀Listening on port: ${PORT}`);
});