
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('char_to_scen_m2m').del()
    .then(function () {
      // Inserts seed entries
      return knex('char_to_scen_m2m').insert([
        {char_id: 1, scen_id: 5, player_id: 1},
        {char_id: 1, scen_id: 6, player_id: 1},
        {char_id: 1, scen_id: 7, player_id: 1},
        {char_id: 1, scen_id: 9, player_id: 1},
        {char_id: 1, scen_id: 22, player_id: 1},
        {char_id: 1, scen_id: 37, player_id: 1},
        {char_id: 1, scen_id: 41, player_id: 1},
        {char_id: 1, scen_id: 45, player_id: 1},
        {char_id: 1, scen_id: 47, player_id: 1},
        {char_id: 1, scen_id: 50, player_id: 1},
        {char_id: 1, scen_id: 52, player_id: 1},
        {char_id: 1, scen_id: 59, player_id: 1},
        {char_id: 1, scen_id: 66, player_id: 1},
        {char_id: 1, scen_id: 67, player_id: 1},
        {char_id: 1, scen_id: 69, player_id: 1},
        {char_id: 1, scen_id: 70, player_id: 1},
        {char_id: 1, scen_id: 71, player_id: 1},
        {char_id: 1, scen_id: 72, player_id: 1},
        {char_id: 1, scen_id: 74, player_id: 1},
        {char_id: 1, scen_id: 83, player_id: 1},
        {char_id: 1, scen_id: 88, player_id: 1},
        {char_id: 1, scen_id: 89, player_id: 1},
        {char_id: 1, scen_id: 90, player_id: 1},
        {char_id: 1, scen_id: 91, player_id: 1},
        {char_id: 1, scen_id: 93, player_id: 1},
        {char_id: 1, scen_id: 96, player_id: 1},
        {char_id: 1, scen_id: 99, player_id: 1},
        {char_id: 1, scen_id: 100, player_id: 1},
        {char_id: 1, scen_id: 101, player_id: 1},
        {char_id: 1, scen_id: 102, player_id: 1},
        {char_id: 1, scen_id: 103, player_id: 1},
        {char_id: 1, scen_id: 104, player_id: 1},
        {char_id: 1, scen_id: 105, player_id: 1},
        {char_id: 1, scen_id: 107, player_id: 1},
        {char_id: 1, scen_id: 109, player_id: 1},
        {char_id: 1, scen_id: 111, player_id: 1},
        {char_id: 1, scen_id: 112, player_id: 1},
        {char_id: 1, scen_id: 119, player_id: 1},
        {char_id: 1, scen_id: 125, player_id: 1},
        {char_id: 1, scen_id: 130, player_id: 1},
        {char_id: 2, scen_id: 17, player_id: 1},
        {char_id: 2, scen_id: 33, player_id: 1},
        {char_id: 2, scen_id: 44, player_id: 1},
        {char_id: 2, scen_id: 55, player_id: 1},
        {char_id: 2, scen_id: 62, player_id: 1},
        {char_id: 2, scen_id: 86, player_id: 1},
        {char_id: 2, scen_id: 98, player_id: 1},
        {char_id: 2, scen_id: 108, player_id: 1},
        {char_id: 2, scen_id: 113, player_id: 1},
        {char_id: 2, scen_id: 116, player_id: 1},
        {char_id: 2, scen_id: 124, player_id: 1},
        
      ]);
    });
};
