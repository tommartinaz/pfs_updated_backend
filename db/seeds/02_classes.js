const uuidv4 = require('uuid');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('classes').del()
    .then(function () {
      // Inserts seed entries
      return knex('classes').insert([
        {
          "id": uuidv4(),
          "class": "Alchemist"
        },
        {
          "id": uuidv4(),
          "class": "Barbarian"
        },
        {
          "id": uuidv4(),
          "class": "Bloodrager"
        },
        {
          "id": uuidv4(),
          "class": "Cleric"
        },
        {
          "id": uuidv4(),
          "class": "Druid"
        },
        {
          "id": uuidv4(),
          "class": "Fighter"
        },
        {
          "id": uuidv4(),
          "class": "Investigator"
        },
        {
          "id": uuidv4(),
          "class": "Paladin"
        },
        {
          "id": uuidv4(),
          "class": "Ranger"
        },
        {
          "id": uuidv4(),
          "class": "Sorcerer"
        },
        {
          "id": uuidv4(),
          "class": "Summoner"
        },
        {
          "id": uuidv4(),
          "class": "Wizard"
        }
      ]);
    });
};
