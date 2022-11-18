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

module.exports = activityController;
