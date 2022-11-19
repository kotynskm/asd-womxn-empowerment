const db = require("../models/activityModel");

const activityController = {};

//find all activities
activityController.getAllActivities = async (req, res, next) => {
  const activities = await db.find();

  res.status(200).json({
    status: "success",
    data: {
      activities,
    },
  });
};

//get activities by owner/user - THIS WORKS
activityController.getActivitiesByOwner = async (req, res, next) => {
  const activities = await db
    .find( {owner: req.params.owner })
    .populate("activities");

  res.status(200).json({
    status: "success",
    data: {
      activities,
    },
  });
};

module.exports = activityController;
