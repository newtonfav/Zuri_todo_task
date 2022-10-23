const express = require("express");
const morgan = require("morgan");
const tasksRouter = require("./routes/tasksRouter");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use("/api/v1/tasks", tasksRouter);

module.exports = app;
