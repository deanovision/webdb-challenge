const express = require("express");
const router = express.Router();
const db = require("./actions-model");

router.post("/", (req, res) => {
  db.addAction(req.body)
    .then(action => {
      res.status(200).json(action);
    })
    .catch(err => {
      res.status(500).json({ message: "server err", err });
    });
});
router.get("/", (req, res) => {
  db.getActions()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      res.status(500).json({ message: "server err", err });
    });
});

module.exports = router;
