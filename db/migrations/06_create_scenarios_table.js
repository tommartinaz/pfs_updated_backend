
exports.up = function(knex, Promise) {
    return knex.schema.createTable('scenarios', table => {
        table.uuid('id');
        table.string('title');
        table.integer('season');
        table.integer('scenarioNumber');
        table.integer('lowLevel');
        table.integer('highLevel');
        table.text('description');
        table.timestamps(true, true);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('scenarios');
};
