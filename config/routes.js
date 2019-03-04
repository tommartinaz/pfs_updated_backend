const index = require('../controllers');
const characters = require('../controllers/characters');
const alignments = require('../controllers/alignments');
const classes = require('../controllers/classes');
const races = require('../controllers/races');
const scenarios = require('../controllers/scenarios');
const players = require('../controllers/players');

module.exports = (app) => {
    app.get('/', index.home);
    app.get('/api/characters', characters.getCharacters);
    // app.get('/characters/details', characters.getDetails);
    app.get('/api/characters/:id', characters.getOneCharacter);
    app.post('/api/characters', characters.addCharacter);
    app.put('/api/characters/:id', characters.editCharacter);
    app.delete('/api/characters/:id', characters.deleteCharacter);

    app.get('/api/alignments', alignments.getAlignments);
    app.get('/api/classes', classes.getClasses);
    app.get('/api/races', races.getRaces);

    app.get('/api/scenarios', scenarios.getAllScenarios);
    app.get('/api/scenarios/:id', scenarios.getOneScenario);
    app.post('/api/scenarios', scenarios.addScenario)
    app.put('/api/scenarios/:id', scenarios.updateScenario);
    app.delete('/api/scenarios/:id', scenarios.deleteScenario);
    app.post('/api/markPlayed', scenarios.markScenarioAsPlayed);

    app.get('/api/players', players.getAllPlayers);
    app.get('/api/players/:id', players.getOnePlayer);

    app.get('/api/characters/:id/scenarios', characters.getScenariosPlayed);
    app.get('/api/characters/:id/playableScenarios', characters.getAvailableScenarios);
    app.get('/api/scenariosPlayed', scenarios.scenariosPlayed);
    app.delete('/api/scenariosPlayed/:playerId/:scenarioId', scenarios.removePlayed);

    app.post('/api/alignments', alignments.createAlignment);
    app.post('/api/classes', classes.createClass);
    app.post('/api/players', players.createPlayer);
    app.post('/api/races', races.createRace);

    app.post('/login', players.logIn);
}