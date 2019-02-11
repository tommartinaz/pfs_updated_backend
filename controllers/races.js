const knex = require('../db/knex');

module.exports = {
    getRaces: (req, res) => {
        knex('races')
          .select()
          .then(races => res.json(races))
    },
    createRace(req,res) {
      knex('races')
        .insert(req.body, '*')
        .then(race => res.json(race))
    }
}