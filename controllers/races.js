const knex = require('../db/knex');

module.exports = {
    getRaces: (req, res) => {
        knex('races')
          .select()
          .then(function (races) {
            res.send(races);
          });
    }
}