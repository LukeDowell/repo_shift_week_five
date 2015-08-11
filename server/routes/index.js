var express = require('express');
var router = express.Router();//Router has to be capitalized
var path = require('path');
var genTeam = require('../modules/createpeople');
var Person = require('../models/person');

router.post("/data/:numPeople", function(req, res, next) {
    var numPeople = parseInt(req.params.numPeople);
    res.send(genTeam(numPeople));
});

router.delete("/data/:id", function(req, res) {
    var id = req.params.id;
    Person.findByIdAndRemove(id, function(err, model) {
        res.send("Delete Successful");
    });
});

router.get("/data", function(req, res, next) {
    Person.find(function(err, people) {
        res.send(people);
    });
});

router.get("/*", function(req, res, next){
    var file = req.params[0] || "views/index.html";
    res.sendFile(path.join(__dirname, "../public", file));
});

module.exports = router;




