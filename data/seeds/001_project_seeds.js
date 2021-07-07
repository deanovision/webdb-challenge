exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          name: "Project 1",
          description: "this project is about....1",
          completed: false
        },
        {
          name: "Project 2",
          description: "this project is about....2",
          completed: false
        },
        {
          name: "Project 3",
          description: "this project is about....3",
          completed: false
        }
      ]);
    });
};
