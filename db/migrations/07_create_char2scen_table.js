
exports.up = function(knex, Promise) {
    return knex.schema.createTable('char_to_scen_m2m', table => {
        table.increments();
        table.integer('char_id').references('id').inTable('characters');
        table.integer('scen_id').references('id').inTable('scenarios');
        table.integer('player_id');
    })
};

exports.down = function(knex, Promise) {
  
};
