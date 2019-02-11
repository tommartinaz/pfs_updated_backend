const knex = require('../db/knex');

module.exports = {
    getClasses: (req, res) => {
        knex('classes')
          .select()
          .then(classes => res.json(classes))
    },
    createClass(req,res) {
      knex('classes')
        .insert(req.body, '*')
        .then(clss => res.json(clss))
    }
}