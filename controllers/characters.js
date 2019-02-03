const knex = require('../db/knex');

module.exports = {
    getCharacters: (req, res) => {
        knex('characters')
          .select('id', 'name', 'alignment_id', 'race_id', 'class_id', 'level')
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
            .returning(['id', 'name', 'level', 'alignment_id', 'class_id', 'race_id'])
            .insert(req.body)
            .then(character => res.send(character))
        //   .then(
        //     knex('characters')
        //     .select('characters.id', 'characters.name', 'alignments.alignment', 'races.race', 'classes.class', 'characters.level')
        //     .leftJoin('races', 'characters.race_id', 'races.id')
        //     .leftJoin('alignments', 'characters.alignment_id', 'alignments.id')
        //     .leftJoin('classes', 'characters.class_id', 'classes.id')
        //     .orderBy('characters.id')
        //     .then(function (characters) {
        //         res.send(characters);
        //     })          
        //   )
    },
    editCharacter: (req, res) => {
        console.log(req.params.id);
        console.log(req.body);
        knex('characters')
            .update(req.body)
            .where('id', req.params.id)
            .then(res.redirect(`/characters/details`))
    },
    deleteCharacter: (req, res) => {
        knex('characters')
          .delete()
          .where('id', req.params.id)
          .then(
              knex('characters')
                .select('id', 'name', 'alignment_id', 'race_id', 'class_id', 'level')
                .orderBy('id')
                .then(function (characters) {
                    res.send(characters);
                })
            )
    },

    getOneCharacter: (req, res) => {
        knex('characters')
          .select('name', 'alignment_id', 'race_id', 'class_id', 'level', 'id')
          .where('id', req.params.id)
          .then(function (characters) {
            res.send(characters);
        });
      
    },
    getScenariosPlayed(req, res) {
        knex('char_to_scen_m2m as c')
            .select()
            .join('scenarios as s', 'c.scen_id', 's.id')
            .where('char_id', req.params.id)
            .then(scenarios => res.send(scenarios))
    },
    getAvailableScenarios(req, res) {
        const subquery = knex('char_to_scen_m2m').select('scen_id', 'pfs_id');
        // knex.raw(`select * from scenarios s where s.id not in (select c.scen_id from char_to_scen_m2m c)`)
        knex('scenarios as s')
            .select()
            .where('s.id', 'not in', subquery)
            .then(scenarios => res.send(scenarios))
    }
}