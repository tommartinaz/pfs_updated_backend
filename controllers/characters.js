const knex = require('../db/knex');
const uuidv4 = require('uuid');
module.exports = {
    getCharacters: (req, res) => {
        knex('characters')
          .select()
          .then(character => res.send(character));
    },

    // getDetails: (req, res) => {
    //     knex('characters')
    //       .select('characters.id', 'characters.name', 'alignments.alignment', 'races.race', 'classes.class', 'characters.level')
    //       .leftJoin('races', 'characters.race_id', 'races.id')
    //       .leftJoin('alignments', 'characters.alignment_id', 'alignments.id')
    //       .leftJoin('classes', 'characters.class_id', 'classes.id')
    //       .orderBy('characters.id')
    //       .then(function (characters) {
    //         res.send(characters);
    //       });
    // },
    addCharacter: (req, res) => {
        knex('characters')
            .insert({
                ...req.body,
                id: uuidv4(),
            }, '*')
            .then(character => res.json(character))
    },
    editCharacter: (req, res) => {
        knex('characters')
            .update(req.body, '*')
            .where('id', req.params.id)
            .then(character => res.json(character))
    },
    deleteCharacter: (req, res) => {
        knex('char_to_scen_m2m')
        .del()
        .where('char_id', req.params.id)
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
            res.json(character);
        });
      
    },
    getScenariosPlayed(req, res) {
        knex('char_to_scen_m2m as c')
            .select()
            .join('scenarios as s', 'c.scen_id', 's.id')
            .where('char_id', req.params.id)
            .then(scenarios => res.json(scenarios))
    },
    getAvailableScenarios(req, res) {
        const subquery = knex('char_to_scen_m2m').select('scen_id', 'pfs_id');
        // knex.raw(`select * from scenarios s where s.id not in (select c.scen_id from char_to_scen_m2m c)`)
        knex('scenarios as s')
            .select()
            .where('s.id', 'not in', subquery)
            .then(scenarios => res.json(scenarios))
    }
}