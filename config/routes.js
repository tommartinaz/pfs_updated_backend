const index = require('../controllers');
const characters = require('../controllers/characters');
const alignments = require('../controllers/alignments');
const classes = require('../controllers/classes');
const races = require('../controllers/races');
const scenarios = require('../controllers/scenarios');
const players = require('../controllers/players');

module.exports = (app) => {
    app.get('/', index.home);
    app.get('/characters', characters.getCharacters);
    // app.get('/characters/details', characters.getDetails);
    app.get('/characters/:id', characters.getOneCharacter);
    app.post('/characters', characters.addCharacter);
    app.post('/characters/:id', characters.editCharacter);
    app.delete('/characters/:id', characters.deleteCharacter);

    app.get('/alignments', alignments.getAlignments);
    app.get('/classes', classes.getClasses);
    app.get('/races', races.getRaces);

    app.get('/scenarios', scenarios.getAllScenarios);
    app.get('/scenarios/:id', scenarios.getOneScenario);
    app.post('/scenarios', scenarios.addScenario)
    app.post('/scenarios/:id', scenarios.updateScenario);
    app.delete('/scenarios/:id', scenarios.deleteScenario);
    app.post('/markPlayed', scenarios.markScenarioAsPlayed);

    app.get('/players', players.getAllPlayers);
    app.get('/players/:id', players.getOnePlayer);

    app.get('/characters/:id/scenarios', characters.getScenariosPlayed);
    app.get('/characters/:id/playableScenarios', characters.getAvailableScenarios);
    app.get('/scenariosPlayed', scenarios.scenariosPlayed);
    app.delete('/scenariosPlayed/:playerId/:scenarioId', scenarios.removePlayed);


    app.post('/alignments', alignments.createAlignment);
    app.post('/classes', classes.createClass);
    app.post('/players', players.createPlayer);
    app.post('/races', races.createRace);
}