const knex = require('../db/knex');
const uuidv4 = require('uuid');

module.exports = {
    getAllScenarios: (req, res) => {
        knex('scenarios as s')
            .select()
            .orderBy(['season', 'scenarioNumber'])
            .then(scenarios => {
                res.json(scenarios)
            })
    },
    
    getOneScenario(req, res) {
        knex('scenarios')
            .select()
            .where('id', req.params.id)
            .then(scenario => {
                res.json(scenario[0])
            })
    },
    addScenario(req, res) {
        knex('scenarios')
            .insert({
                ...req.body,
                id: uuidv4()},
                '*'
            )
            .then(scenario => res.json(scenario[0]))
    },
    updateScenario: (req, res) => {
        knex('scenarios')
            .update(req.body, '*')
            .where('id', req.params.id)
            .then(scenario => res.json(scenario[0]))
    },
    deleteScenario(req, res) {
        knex('scenarios')
            .delete()
            .where('id', req.params.id)
            .then(res.sendStatus(204));
    },
    scenariosPlayed(req, res) {
        knex('char_to_scen_m2m')
            .select('characterId', 'scenarioId', 'playerId')
            .then(data => res.send(data))
    },
    // markScenarioAsPlayed(req, res) {
    //     console.log(req.body);
    //     knex('char_to_scen_m2m')
    //         .insert(req.body)
    //         .then(res.sendStatus(201))
    // },
    markScenarioAsPlayed(req, res) {
        const { scenarioId, playerId } = req.body;
        console.log("SESSION DETAILS", scenarioId, playerId, req.body)
        knex('char_to_scen_m2m')
            .del()
            .where({
                scenarioId: scenarioId,
                playerId: playerId
            })
            .then(knex('char_to_scen_m2m')
                .insert(req.body)
                .then(res.sendStatus(201))
            )
    },
    removePlayed(req, res) {
        knex('char_to_scen_m2m')
            .delete()
            .where({
                scenarioId: req.params.scenarioId,
                playerId: req.params.playerId
            })
            .then(res.sendStatus(204))
    }

}