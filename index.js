const express = require("express");
const app = express();
const PORT = 8000;

require("dotenv").config();
//DB config
const dbconfig = require("./config/dbconfig");
dbconfig();

//Setting up regular middleware
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Setting up routes
const tasksRoutes = require("./routes/tasksRoutes");
app.use("/", tasksRoutes);

//Setting up server
app.listen(PORT, () => console.log(`Server is up and running on PORT:${PORT}`));
