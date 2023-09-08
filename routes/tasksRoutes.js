const router = require("express").Router();

const {
  createTask,
  getAllTasks,
  updateTaskStatus,
  deleteTasks,
} = require("../controllers/tasksControllers");

//Setting up API routes
router.route("/task").post(createTask);
router.route("/tasks").get(getAllTasks);
router.route("/task/:id").put(updateTaskStatus).delete(deleteTasks);

//exporting router
module.exports = router;
