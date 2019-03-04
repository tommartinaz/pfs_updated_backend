
exports.up = function(knex, Promise) {
    return knex.schema.createTable('characters', table => {
        table.uuid('id');
        table.integer('characterNumber');
        table.string('name').notNullable();
        table.string('race');
        table.string('characterClass');
        table.string('alignment');
        table.integer('level').defaultTo(1);
        table.uuid('playerId');
        table.timestamps(true, true);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('characters');
};
