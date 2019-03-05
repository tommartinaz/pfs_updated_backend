const uuidv4 = require('uuid');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('classes').del()
    .then(function () {
      // Inserts seed entries
      return knex('classes').insert([
        {
          "id": uuidv4(),
          "name": "Alchemist"
        },
        {
          "id": uuidv4(),
          "name": "Barbarian"
        },
        {
          "id": uuidv4(),
          "name": "Bloodrager"
        },
        {
          "id": uuidv4(),
          "name": "Cleric"
        },
        {
          "id": uuidv4(),
          "name": "Druid"
        },
        {
          "id": uuidv4(),
          "name": "Fighter"
        },
        {
          "id": uuidv4(),
          "name": "Investigator"
        },
        {
          "id": uuidv4(),
          "name": "Paladin"
        },
        {
          "id": uuidv4(),
          "name": "Ranger"
        },
        {
          "id": uuidv4(),
          "name": "Sorcerer"
        },
        {
          "id": uuidv4(),
          "name": "Summoner"
        },
        {
          "id": uuidv4(),
          "name": "Wizard"
        }
      ]);
    });
};
