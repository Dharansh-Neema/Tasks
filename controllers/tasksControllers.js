const tasks = require("../model/tasks");
//To create new Tasks
exports.createTask = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    if (!title || !status)
      throw new Error("Title and Status is required to create new tasks");
    const response = await tasks.create({
      title,
      description,
      status,
    });
    console.log(response);
    res.status(200).json({ success: true, response });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      success: false,
      error: error.message,
      message: "Something went wrong while creating Task",
    });
  }
};

//To Get all the tasks
exports.getAllTasks = async (req, res) => {
  try {
    const response = await tasks.find();
    res.status(200).json({ success: true, response });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      success: false,
      error: error.message,
      message: "Something went wrong while getting all the tasks",
    });
  }
};

//To Update the tasks
exports.updateTaskStatus = async (req, res) => {
  try {
    const id = req.params.id;
    const status = req.body.status;

    const resposne = await tasks.findByIdAndUpdate(
      id,
      { status: status },
      { runValidators: true, new: true }
    );
    res.status(200).json({
      success: true,
      message: "Status updated successfully",
      resposne,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      success: false,
      error: error.message,
      message: "Something went wrong while updating the task",
    });
  }
};

//To delete the status
exports.deleteTasks = async (req, res) => {
  try {
    const id = req.params.id;

    await tasks.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, message: "Task deleted successfullly" });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      success: false,
      error: error.message,
      message: "Something went wrong while deleting the task",
    });
  }
};
