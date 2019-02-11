
exports.up = function(knex, Promise) {
    return knex.schema.createTable('char_to_scen_m2m', table => {
        table.increments();
        table.uuid('char_id');
        table.uuid('scen_id');
        table.uuid('player_id');
    })
};

exports.down = function(knex, Promise) {
  
};
