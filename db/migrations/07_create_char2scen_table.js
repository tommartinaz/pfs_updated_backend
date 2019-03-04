
exports.up = function(knex, Promise) {
    return knex.schema.createTable('char_to_scen_m2m', table => {
        table.increments();
        table.uuid('characterId');
        table.uuid('scenarioId');
        table.uuid('playerId');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('char_to_scen_m2m');
};
