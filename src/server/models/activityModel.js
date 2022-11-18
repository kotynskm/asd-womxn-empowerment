const mongoose = require("mongoose");
const { Schema } = mongoose;

const activitySchema = new Schema({
  type: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
  emotion: {
    type: String,
  },
  liked: {
    type: Boolean,
  },
  journal: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Activity", activitySchema);
