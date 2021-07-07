exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("actions")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("actions").insert([
        {
          description: "sample action 1",
          notes: "example notes 1",
          completed: false,
          project_id: 1
        },
        {
          description: "sample action 2",
          notes: "example notes 2",
          completed: false,
          project_id: 1
        },
        {
          description: "sample action 3",
          notes: "example notes 3",
          completed: false,
          project_id: 1
        },
        {
          description: "sample action 1",
          notes: "example notes 1",
          completed: false,
          project_id: 2
        },
        {
          description: "sample action 2",
          notes: "example notes 2",
          completed: false,
          project_id: 2
        },
        {
          description: "sample action 3",
          notes: "example notes 3",
          completed: false,
          project_id: 2
        },
        {
          description: "sample action 1",
          notes: "example notes 1",
          completed: false,
          project_id: 3
        },
        {
          description: "sample action 2",
          notes: "example notes 2",
          completed: false,
          project_id: 3
        },
        {
          description: "sample action 3",
          notes: "example notes 3",
          completed: false,
          project_id: 3
        }
      ]);
    });
};
