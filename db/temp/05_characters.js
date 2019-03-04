exports.seed = function(knex, Promise) {
  const uuidv4 = require('uuid/v4');
  console.log(uuidv4())
  // Deletes ALL existing entries
  return knex('characters').del()
    .then(function() {
      // Inserts seed entries
      return knex('characters').insert([{
          "id": uuidv4(),
          "name": "Obat Al Badaz",
          "race": 7,
          "characterClass": 2,
          "alignment": 6,
          "level": 15,
          "playerId": 1,
          "characterNumber": 1,
        },
        {
          "id": uuidv4(),
          "name": "Chanos",
          "race": 7,
          "characterClass": 8,
          "alignment": 1,
          "level": 14,
          "playerId": 1,
          "characterNumber": 2,
        },
        {
          "id": uuidv4(),
          "name": "Barbazel",
          "race": 4,
          "characterClass": 6,
          "alignment": 2,
          "level": 12,
          "playerId": 1,
          "characterNumber": 3,
        },
        {
          "id": uuidv4(),
          "name": "Muiran",
          "race": 1,
          "characterClass": 10,
          "alignment": 6,
          "level": 11,
          "playerId": 1,
          "characterNumber": 4,
        },
        {
          "id": uuidv4(),
          "name": "Cort",
          "race": 6,
          "characterClass": 4,
          "alignment": 3,
          "level": 6,
          "playerId": 1,
          "characterNumber": 5,
        },
        {
          "id": uuidv4(),
          "name": "Garth",
          "race": 7,
          "characterClass": 4,
          "alignment": 5,
          "level": 8,
          "playerId": 1,
          "characterNumber": 6,
        },
        {
          "id": uuidv4(),
          "name": "Mathishard Forme",
          "race": 7,
          "characterClass": 2,
          "alignment": 3,
          "level": 12,
          "playerId": 1,
          "characterNumber": 7,
        },
        {
          "id": uuidv4(),
          "name": "Bombax",
          "race": 10,
          "characterClass": 1,
          "alignment": 6,
          "level": 8,
          "playerId": 1,
          "characterNumber": 8,
        },
        {
          "id": uuidv4(),
          "name": "Jakori Al Badaz",
          "race": 7,
          "characterClass": 6,
          "alignment": 6,
          "level": 8,
          "playerId": 1,
          "characterNumber": 9,
        },
        {
          "id": uuidv4(),
          "name": "Eina Lightfingers",
          "race": 9,
          "characterClass": 7,
          "alignment": 5,
          "level": 8,
          "playerId": 1,
          "characterNumber": 10,
        },
        {
          "id": uuidv4(),
          "name": "Lorric Gunderson",
          "race": 7,
          "characterClass": 3,
          "alignment": 5,
          "level": 7,
          "playerId": 1,
          "characterNumber": 11,
        },
        {
          "id": uuidv4(),
          "name": "Oolish",
          "race": 6,
          "characterClass": 12,
          "alignment": 4,
          "level": 1,
          "playerId": 1,
          "characterNumber": 12,
        },
        {
          "id": uuidv4(),
          "name": "Teeleh",
          "race": 8,
          "characterClass": 3,
          "alignment": 4,
          "level": 5,
          "playerId": 1,
          "characterNumber": 13,
        },
        {
          "id": uuidv4(),
          "name": "Arta Myrdhyn",
          "race": 7,
          "characterClass": 12,
          "alignment": 2,
          "level": 5,
          "playerId": 1,
          "characterNumber": 14,
        }
      ]);
    });
};
