exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", tbl => {
    tbl.increments();
    tbl.text("description").notNullable();
    tbl.text("notes");
    tbl.boolean("completed").notNullable();
    tbl
      .integer("project_id")
      .unsigned()
      .references("id")
      .inTable("projects")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actions");
};
