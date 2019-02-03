const knex = require('../db/knex');

module.exports = {
    getClasses: (req, res) => {
        knex('classes')
          .select()
          .then(function (classes) {
            res.send(classes);
          });
    }
}