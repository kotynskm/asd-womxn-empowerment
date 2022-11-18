//router for anything activity tracking related
const express = require("express");
// const session = require('express-session'); do we need this? if not, how to manage session in logout route
const router = express.Router();
const activityController = require("../controllers/activityController");

//route to get all users from db
router.route("/activities").get(activityController.getAllActivities);

// '/activity' endpoint in the server.js,

//log activity rating
//do we wnat to put this in a controller?
//verify the user is logged in
//find the user doc
//update the user doc (findOneAndUpdate???)
//return updated tracker info to the front end

module.exports = router;
