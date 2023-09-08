const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    minLength: [3, "Title must be of more than 3 letters"],
    maxLength: [50, "Title can't be greater than 50 letters"],
    required: [true, "Title is required"],
  },
  description: String,
  status: {
    type: String,
    enum: ["new", "pending", "inProgress", "completed"],
    required: [true, "Status of tasks is required"],
  },
});
module.exports = new mongoose.model("tasks", taskSchema);
