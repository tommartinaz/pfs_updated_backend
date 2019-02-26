const knex = require('../db/knex');
const uuidv4 = require('uuid');

module.exports = {
    getAllPlayers(req, res) {
        knex('players')
            .select()
            .then(players => res.json(players))
    },
    createPlayer(req,res) {
        knex('players')
          .insert({
              ...req.body,
              id: uuidv4()
           }, '*')
          .then(player => res.json(player))
    },
    getOnePlayer(req, res) {
        knex('players')
            .select()
            .where('id', req.params.id)
            .then(player => res.json(player))
    },

    logIn(req, res) {
        console.log("REQ", req.body)
        knex('players')
            .where('email', req.body.email)
            .then(player => {
                if(!player[0]) {
                    res.sendStatus(400);
                } else {
                    if(player[0].password === req.body.password) {
                        res.json(player[0]);
                    } else {
                        res.sendStatus(403);
                    }
                }
            })

    }
  
}
