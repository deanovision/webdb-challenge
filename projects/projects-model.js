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
  let project;
  let actions;
  return db
    .from("projects")
    .where({ id })
    .first()
    .then(project => {
      return project;
    })
    .then(result => {
      project = result;
    })
    .then(() => {
      return db("actions").where({ project_id: id });
    })
    .then(actions => {
      return actions;
    })
    .then(results => (actions = results))
    .then(() => {
      project.actions = actions;
      console.log(project);
    })
    .then(() => project);
}
function addProject(project) {
  return db("projects")
    .insert(project)
    .then(id => getProject(id[0]));
}
