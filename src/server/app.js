// we will use express for route handling, error handling, database integration etc..
const express = require("express");
const morgan = require("morgan");
const session = require("express-session");
const passport = require("passport");
const userRoutes = require("./routes/userRoutes");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var LocalStrategy = require("passport-local").Strategy;
const User = require("./models/userModel");

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
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(function (username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) {
        return done(err);
      }
      // if we find no user
      if (!user) {
        return done(null, false, { message: "No user found." });
      }
      // can implement bcrypt.compare for password comparison
      if (user.password != password) {
        return done(null, false);
      }

      return done(null, user);
    });
  })
);

// serialize user and store in session
passport.serializeUser(function (user, done) {
  done(null, user.id);
});
// deserialize user
passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

app.get("/login", (req, res) => {
  res.send("hello from get login route");
});
app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login?error=true",
  }),
  function (req, res) {
    console.log(req.user);
    res.locals.user = req.user;
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
    // once user is authenticated, send back the username, email, and photo
    // query db -- do logic. black magic.
    res.redirect("/");
    res.status(200).send(res.locals.user);
  }
);

// routes
// app.use("/", userRoutes);

// export app
module.exports = app;
