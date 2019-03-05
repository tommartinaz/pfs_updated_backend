const uuidv4 = require('uuid');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('races').del()
    .then(function () {
      // Inserts seed entries
      return knex('races').insert([
        {
          "id": uuidv4(),
          "name": "Aasimar"
        },
        {
          "id": uuidv4(),
          "name": "Dwarf"
        },
        {
          "id": uuidv4(),
          "name": "Elf"
        },
        {
          "id": uuidv4(),
          "name": "Half-elf"
        },
        {
          "id": uuidv4(),
          "name": "Half-orc"
        },
        {
          "id": uuidv4(),
          "name": "Halfling"
        },
        {
          "id": uuidv4(),
          "name": "Human"
        },
        {
          "id": uuidv4(),
          "name": "Nagaji"
        },
        {
          "id": uuidv4(),
          "name": "Sylph"
        },
        {
          "id": uuidv4(),
          "name": "Tiefling"
        }
      ]);
    });
};
