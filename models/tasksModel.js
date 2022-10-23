const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A task must have a name!"],
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: [true, "A task must have a duration"],
  },
  timeStamp: {
    type: Date,
    default: Date.now(),
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
