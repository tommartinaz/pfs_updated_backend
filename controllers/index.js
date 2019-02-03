const knex = require('../db/knex');

module.exports = {
    home: (req, res) => {
        res.render('index', { title: 'Express' });
    }
}