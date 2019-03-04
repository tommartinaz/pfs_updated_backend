const uuidv4 = require('uuid');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('players').del()
    .then(function () {
      // Inserts seed entries
      return knex('players').insert([
        {
          id: uuidv4(),
          name: 'Tom',
          "pfsId": 62911,
          email: "a@b.c",
          password: "a"
        },
        {
          id: uuidv4(),
          name: 'Aaron',
          "pfsId": 1751,
          email: "aa@b.c",
          password: "a"
        },
      ]);
    });
};
