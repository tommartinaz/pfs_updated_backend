const knex = require('../db/knex');
const uuidv4 = require('uuid');
module.exports = {
    getCharacters: (req, res) => {
        knex('characters')
          .select()
          .then(character => res.send(character));
    },

    addCharacter: (req, res) => {
        console.log(req.body);
        knex('characters')
            .insert({
                ...req.body,
                id: uuidv4(),
            }, '*')
            .then(character => res.json(character[0]))
    },
    editCharacter: (req, res) => {
        knex('characters')
            .update(req.body, '*')
            .where('id', req.params.id)
            .then(character => res.json(character[0]))
    },
    deleteCharacter: (req, res) => {
        knex('char_to_scen_m2m')
        .del()
        .where('characterId', req.params.id)
        .then(knex('characters')
          .delete()
          .where('id', req.params.id)
          .then(res.sendStatus(204))
        );
    },

    getOneCharacter: (req, res) => {
        knex('characters')
          .select()
          .where('id', req.params.id)
          .then(character => {
            res.json(character[0]);
        });
      
    },
    getScenariosPlayed(req, res) {
        knex('char_to_scen_m2m as c')
            .select()
            .join('scenarios as s', 'c.scenarioId', 's.id')
            .where('characterId', req.params.id)
            .then(scenarios => res.json(scenarios))
    },
    getAvailableScenarios(req, res) {
        const subquery = knex('char_to_scen_m2m').select('scenarioId', 'pfsId');
        // knex.raw(`select * from scenarios s where s.id not in (select c.scenarioId from char_to_scen_m2m c)`)
        knex('scenarios as s')
            .select()
            .where('s.id', 'not in', subquery)
            .then(scenarios => res.json(scenarios))
    }
}