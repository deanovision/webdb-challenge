const express = require("express");
const helmet = require("helmet");
const projectsRouter = require("./projects/projects-router");
const server = express();
server.use(express.json());
server.use(helmet());

server.get("/", (req, res) => {
  res.send("Connected");
});

server.use("/api/projects", projectsRouter);

module.exports = server;
