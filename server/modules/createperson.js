var age = require("./age");
var location = require("./location");
var name = require("./name");
var sex = require("./sex");
var twitter = require("./twitter");
var Person = require('../models/person');

function genUser(){
    var newPerson = new Person({
        age: age(),
        name: name(),
        location: location(),
        twitterhandle: twitter(),
        gender: sex()
    });
    Person.create(newPerson);
    return newPerson;
}

module.exports = genUser;

