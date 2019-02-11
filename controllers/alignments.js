const knex = require('../db/knex');
const uuidv4 = require('uuid');

module.exports = {
    getAlignments: (req, res) => {
        knex('alignments')
          .select()
          .then(alignments => res.json(alignments))
    },
    createAlignment(req,res) {
      knex('alignments')
        .insert(req.body, '*')
        .then(alignment => res.json(alignment))
    }
}