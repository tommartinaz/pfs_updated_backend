
exports.up = function(knex, Promise) {
    return knex.schema.createTable('characters', table => {
        table.uuid('id');
        table.integer('characterNumber');
        table.string('name').notNullable();
        table.uuid('raceId');
        table.uuid('classId');
        table.uuid('alignmentId');
        table.integer('level').defaultTo(1);
        table.uuid('playerId');
        table.timestamps(true, true);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('characters');
};
