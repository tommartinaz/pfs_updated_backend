
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('players').del()
    .then(function () {
      // Inserts seed entries
      return knex('players').insert([
        {name: 'Tom', "pfs_id": 62911, email: "t.martin49@gmail.com", password: "test123"},
        {name: 'Aaron', "pfs_id": 1751, email: "adgq@gmail.com", password: "test123"},
      ]);
    });
};
