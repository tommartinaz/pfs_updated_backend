
exports.up = function(knex, Promise) {
  return knex.schema.createTable('races', table => {
      table.uuid('id');
      table.string('name').notNullable();
      table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('races');
};
