
exports.up = function(knex, Promise) {
    return knex.schema.createTable('alignments', table => {
        table.uuid('id');
        table.string('alignment').notNullable();
        table.timestamps(true, true);
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('alignments');
};
