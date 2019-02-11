
exports.up = function(knex, Promise) {
    return knex.schema.createTable('characters', table => {
        table.uuid('id');
        table.integer('character_num');
        table.string('name').notNullable();
        table.uuid('race_id');
        table.uuid('class_id');
        table.uuid('alignment_id');
        table.integer('level').defaultTo(1);
        table.uuid('player_id');
        table.timestamps(true, true);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('characters');
};
