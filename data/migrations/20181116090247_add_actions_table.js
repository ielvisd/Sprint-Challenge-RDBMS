exports.up = function(knex, Promise) {
  // makes the changes to the database
  return knex.schema.createTable('actions', function(tbl) {
    // make changes to the table using the tbl object passed as a parameter

    // primary key
    tbl.increments(); // generate an id field and make it auto-increment and the primary key

    // other fields
    tbl.string('description').notNullable();
    tbl.text('notes');
    tbl.boolean('completed').defaultTo(false);

    //Foreign Key to Projects Table
    tbl
      .integer('project_id')
      .unsigned()
      .references('id')
      .inTable('projects');

    tbl.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  // undo the changes to the database (it's called rolling back changes)
  return knex.schema.dropTableIfExists('actions');
};