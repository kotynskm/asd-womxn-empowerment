const mongoose = require("mongoose");
const validator = require("validator");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please enter a username."],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please provide an email address."],
    unique: true,
    validate: [validator.isEmail, "Please provide email in a valid format."],
  },
  password: {
    type: String,
    required: [true, "Please enter a password."],
  },
  photo: {
    type: String,
  },
  activities: [
    {
      type: Schema.Types.ObjectId,
      ref: "Activity",
    },
  ],
});

// to add password validation and password confirmation?

// implement encryption using bcrypt?

// create user model and export it
const User = mongoose.model("User", userSchema);
module.exports = User;
