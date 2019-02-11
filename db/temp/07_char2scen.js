
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('char_to_scen_m2m').del()
    .then(function () {
      // Inserts seed entries
      return knex('char_to_scen_m2m').insert([
      ]);
    });
};
