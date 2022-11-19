const express = require("express");
// const session = require('express-session'); do we need this? if not, how to manage session in logout route
const router = express.Router();
const userController = require("../controllers/userController");
const cookieController = require("../controllers/cookieController");

//route to get all users from db
router.route("/users").get(userController.getAllUsers);
router.route("/useractivity").get(userController.getAllActivities);
//route to sign up -> userController to create a user -> then login
router.post("/signup", userController.createUser, (req, res) => {
  res.status(200).json(res.locals.doc);
});

//route to log in -> find and verify user pw --> create a session --> return session id and user info in the response
router.post(
  "/",
  userController.verifyUser,
  cookieController.setCookie,
  (req, res) => {
    res.status(200).json(res.locals.doc);
  }
);

//route to log out - Kathy did not test this! - BUT WE MAY NEED TO DO CLIENT SIDE LOGOUT SINCE WE'RE USING COOKIES AND NOT SESSION, TALK TO REGINA
//delete should destroy cookie
// router.delete('/logout', (req, res) => {
//   // destroy session data
//   if (req.session) {
//     req.session.destroy(err => {
//       if (err) {
//         res.status(400).send('Unable to log out')
//       } else {
//         res.send('Logout successful')
//         // redirect to homepage
//         res.redirect('/');
//       }
//     });
//   } else {
//     res.end()
//   }
// })

module.exports = router;
