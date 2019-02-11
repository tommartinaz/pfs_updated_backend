const knex = require('../db/knex');
const uuidv4 = require('uuid');

module.exports = {
    getAllScenarios: (req, res) => {
        knex('scenarios as s')
            .select()
            .orderBy(['season', 'scen_num'])
            .then(scenarios => {
                res.json(scenarios)
            })
    },
    
    getOneScenario: (req, res) => {
        knex('scenarios as s')
            .select()
            .where('id', req.params.id)
            .then(scenarios => {
                res.json(scenarios)
            })
    },
    addScenario(req, res) {
        knex('scenarios')
            .insert({
                ...req.body,
                id: uuidv4()},
                '*'
            )
            .then(scenario => res.json(scenario))
    },
    updateScenario: (req, res) => {
        knex('scenarios')
            .update(req.body, '*')
            .where('id', req.params.id)
            .then(scenario => res.json(scenario))
    },
    deleteScenario(req, res) {
        knex('scenarios')
            .delete()
            .where('id', req.params.id)
            .then(res.sendStatus(204));
    },
    scenariosPlayed(req, res) {
        knex('char_to_scen_m2m')
            .select('char_id', 'scen_id', 'player_id')
            .then(data => res.send(data))
    },
    markScenarioAsPlayed(req, res) {
        knex('char_to_scen_m2m')
            .insert(req.body)
            .then(res.sendStatus(201))
    }

}