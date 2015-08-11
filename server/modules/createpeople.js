var genUser = require('./createperson');

function generateTeam(numPeople) {
    var team = [];
    for(var i = 0; i<numPeople; i++){
        team.push(genUser());
    }
    return team;
}

module.exports = generateTeam;