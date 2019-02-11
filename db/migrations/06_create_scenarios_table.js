
exports.up = function(knex, Promise) {
    return knex.schema.createTable('scenarios', table => {
        table.uuid('id');
        table.string('title');
        table.integer('season');
        table.integer('scen_num');
        table.integer('low_level');
        table.integer('high_level');
        table.text('description');
        table.timestamps(true, true);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('scenarios');
};
