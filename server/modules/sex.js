
var random = require("./random");

function sexGen(){
    if(random(0, 1) === 1) {
        return "male";
    } else {
        return "female";
    }
}

module.exports = sexGen;


//this generates and exports if a person is male or female