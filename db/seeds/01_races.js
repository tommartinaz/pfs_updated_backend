const uuidv4 = require('uuid');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('races').del()
    .then(function () {
      // Inserts seed entries
      return knex('races').insert([
        {
          "id": uuidv4(),
          "race": "Aasimar"
        },
        {
          "id": uuidv4(),
          "race": "Dwarf"
        },
        {
          "id": uuidv4(),
          "race": "Elf"
        },
        {
          "id": uuidv4(),
          "race": "Half-elf"
        },
        {
          "id": uuidv4(),
          "race": "Half-orc"
        },
        {
          "id": uuidv4(),
          "race": "Halfling"
        },
        {
          "id": uuidv4(),
          "race": "Human"
        },
        {
          "id": uuidv4(),
          "race": "Nagaji"
        },
        {
          "id": uuidv4(),
          "race": "Sylph"
        },
        {
          "id": uuidv4(),
          "race": "Tiefling"
        }
      ]);
    });
};
