
exports.up = function(knex, Promise) {
    return knex.schema.createTable('players', table => {
        table.uuid('id');
        table.string('name');
        table.integer('pfs_id');
        table.string('email');
        table.string('password');
        table.timestamps(true, true);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('players');
};
