var random = require('./random');

function getAge(){
    return random(13, 65);
}

module.exports = getAge;


//this module will generate and export the age for each user

