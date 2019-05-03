const express = require("express");
const router = express.Router();
const db = require("./projects-model");

router.get("/", (req, res) => {
  db.getProjects()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: "error getting projects", error: err });
    });
});
router.get("/:id", (req, res) => {
  db.getProject(req.params.id)
    .then(project => {
      // console.log(project);
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json({ message: "error getting project", error: err });
    });
});

module.exports = router;
