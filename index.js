const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const multer = require("multer");
const upload = multer();
const path = require("path");

require("dotenv").config();

require("./models/user_model");
require("./models/event_model");
require("./models/member_model");
require("./models/project_model");
require("./services/passport")(passport);

const app = express();
const PORT =  process.env.PORT || 5000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/css'));
app.use(express.static(__dirname + '/public/images'));
app.use(express.static(__dirname + '/public/js'));
// app.use(express.static("public"));
app.set("view engine", "ejs");

// Express session
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
    cookie: {
      _expires: 6000000
    }
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

app.use('/uploads', express.static('./uploads'));

const uri = process.env.ATLAS_URI;
mongoose.Promise = global.Promise;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to Mongo");
  })
  .catch((e) => {
    console.error(e);
  });

//connecting route handlers
require("./routes/authRoutes")(app);
require("./routes/eventRoutes")(app);
require("./routes/memberRoutes")(app);
require("./routes/projectRoutes")(app);
require("./routes/viewRoutes")(app);


app.listen(PORT, () => {
  console.log(`🚀Listening on port: ${PORT}`);
});
