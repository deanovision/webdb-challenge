const db = require("../data/dbConfig");

module.exports = {
  getProjects,
  getProject,
  addProject
};

function getProjects() {
  return db("projects");
}
function getProject(id) {
  return db
    .from("projects")
    .where({ id })
    .innerJoin("actions", "projects.id", "actions.project_id");
}
function addProject(project) {
  return db("projects")
    .insert(project)
    .then(({ id }) => getProject(id));
}
