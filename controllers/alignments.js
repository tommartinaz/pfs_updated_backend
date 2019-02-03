const knex = require('../db/knex');

module.exports = {
    getAlignments: (req, res) => {
        knex('alignments')
          .select()
          .then(function (alignments) {
            res.send(alignments);
          });
    }
}