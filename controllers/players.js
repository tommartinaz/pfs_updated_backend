const knex = require('../db/knex');

module.exports = {
    getAllPlayers(req, res) {
        knex('players')
            .select()
            .then(players => res.send(players))

    }
}
