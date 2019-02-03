const knex = require('../db/knex');

module.exports = {
    getAllScenarios: (req, res) => {
        knex('scenarios as s')
            .select(
              'id',
              'title',
              'season',
              'scen_num',
              'low_level',
              'high_level',
              'description',
            )
            .orderBy('s.id')
            .then(scenarios => {
                res.send(scenarios)
            })
    },
    
    getOneScenario: (req, res) => {
        knex('scenarios as s')
            .select('id', 'title', 'season', 'scen_num', 'low_level', 'high_level', 'description')
            .where('id', req.params.id)
            .then(scenarios => {
                res.send(scenarios)
            })
    },
    addScenario(req, res) {
        knex('scenarios')
            .returning(['id', 'title', 'season', 'scen_num', 'low_level', 'high_level', 'description'])
            .insert(req.body)
            .then(scenario => res.send(scenario))
    },
    updateScenario: (req, res) => {
        console.log(req.body);
        knex('scenarios')
            .returning(['id', 'title', 'season', 'scen_num', 'low_level', 'high_level', 'description'])
            .update(req.body)
            .where('id', req.params.id)
            .then(res.redirect('/scenarios'))
    },

    allScenariosForSeason(req, res) {
        knex('scenarios as s')
            .select(
              'id',
              'title',
              'season',
              'scen_num',
              'low_level',
              'high_level',
              'description',
            )
            .orderBy('id')
            .where('season', req.params.id)
            .then(scenarios => {
                res.send(scenarios)
            })
    },

}