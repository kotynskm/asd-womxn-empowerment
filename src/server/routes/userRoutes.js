const express = require("express");
const router = express.Router();
const authController = require("../../../controllers/authController");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("../models/userModel");

// use local strategy to authenticate users by verifying username and password
// passport.use(
//   new LocalStrategy(function (username, password, done) {
//     User.findOne({ username: username }, function (err, user) {
//       if (err) {
//         return done(err);
//       }
//       // if we find no user
//       if (!user) {
//         return done(null, false, { message: "No user found." });
//       }
//       if (!user.verifyPassword(password)) {
//         return done(null, false);
//       }

//       return done(null, user);
//     });
//   })
// );

// // serialize user and store in session
// passport.serializeUser(function (user, done) {
//   done(null, user.id);
// });
// // deserialize user
// passport.deserializeUser(function (id, done) {
//   User.findById(id, function (err, user) {
//     done(err, user);
//   });
// });

// router.get("/login", (req, res) => {
//   res.status(200).json({
//     status: "success",
//     data: {},
//   });
// });

// router.post(
//   "/login",
//   passport.authenticate("local", {
//     successRedirect: "/",
//     failureRedirect: "/login?error=true",
//   }),
//   function (req, res) {
//     console.log(req.user);
//     res.locals.user = req.user;
// res.status(200).json({
//   status: "success",
//   data: {
//     user,
//   },
// });
//once user is authenticated, send back the username, email, and photo
//query db -- do logic. black magic.
// res.redirect("/");
//     res.status(200).send(res.locals.user);
//   }
// );

// user creation/login routes
// router.route("/login").post(authController.login);

// export router
module.exports = router;
