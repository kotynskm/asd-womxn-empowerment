const db = require("../models/userModel");

const userController = {};

//find all users in DB
userController.getAllUsers = async (req, res, next) => {
  const users = await db.find();

  res.status(200).json({
    status: "success",
    data: {
      users,
    },
  });
};

//get activities associated with a user ID
userController.getAllActivities = async (req, res, next) => {
  const activities = await db
    .find({ name: req.params.name }) //use "owner" instead? owner == userID? this doesn't seem like a deep enough query somehow
    .populate("activities");

  res.status(200).json({
    status: "success",
    data: {
      activities,
    },
  });
};

//create user
//Regina did not test this yet!
userController.createUser = (req, res, next) => {
  const { name, email, password } = req.body; //might need to add photo here
  if ((name == "") | (email == "") | (password == "")) {
    return next(
      createErr({
        method: "createUser",
        type: "missing info",
        err: "Missing Info",
      })
    );
  } else {
    db.create(req.body).then((data) => console.log(data));
  }
};

//verify user
userController.verifyUser = (req, res, next) => {
  console.log("in usercontroller verify user...req.body", req.body);
  const { name, password } = req.body;

  db.findOne({ name: name })
    .then((data) => {
      //returned data is the entire document
      console.log(data);

      //check if passwords match
      //if do not match, send back error for wrong password
      //if match, create user session --- return next
      if (password !== data.password) {
        return next({ err: "passwords do not match" });
      } else {
        res.locals.doc = data;
        return next();
      }
    })
    .catch((error) => {
      return next(
        "error in userController.verifyUser:" + JSON.stringify(error)
      );
    });
};

//update userpw

//delete user

module.exports = userController;
