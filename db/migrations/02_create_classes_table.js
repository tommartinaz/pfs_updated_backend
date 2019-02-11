
exports.up = function(knex, Promise) {
    return knex.schema.createTable('classes', table => {
        table.uuid('id');
        table.string('class').notNullable();
        table.timestamps(true, true);
    })    
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('classes');
};
