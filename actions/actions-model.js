const db = require("../data/dbConfig");

module.exports = {
  getActions,
  addAction
};

function addAction(action) {
  return db("actions").insert(action);
}
function getActions() {
  return db("actions");
}
