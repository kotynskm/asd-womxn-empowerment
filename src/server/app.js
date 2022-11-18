// we will use express for route handling, error handling, database integration etc..
const express = require("express");
const morgan = require("morgan");
const session = require("express-session");
const passport = require("passport");
const userRoutes = require("./routes/userRoutes");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var LocalStrategy = require("passport-local");
const User = require("./models/userModel");
const authRouter = require('./routes/authRouter');
// create an instance of the app object in express
const app = express();

// middleware
app.use(morgan("dev"));
app.use(require("cookie-parser")());
app.use(
  require("express-session")({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
  })
);

app.use('/', authRouter)




// export app
module.exports = app;
