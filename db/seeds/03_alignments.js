const uuidv4 = require('uuid');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('alignments').del()
    .then(function () {
      // Inserts seed entries
      return knex('alignments').insert([
        {
          "id": uuidv4(),
          "alignment": "LG"
        },
        {
          "id": uuidv4(),
          "alignment": "LN"
        },
        {
          "id": uuidv4(),
          "alignment": "NG"
        },
        {
          "id": uuidv4(),
          "alignment": "N"
        },
        {
          "id": uuidv4(),
          "alignment": "CG"
        },
        {
          "id": uuidv4(),
          "alignment": "CN"
        }
      ]);
    });
};
