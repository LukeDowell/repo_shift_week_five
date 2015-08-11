var express = require("express");
var path = require("path");
var mongoose = require('mongoose');
var index = require('./routes/index');
//var things  = require('./routes/things');
var bodyParser = require('body-parser');
var app = express();
var mongoURI = 'mongodb://localhost/repo_switch_green';
var mongoDB = mongoose.connect(mongoURI).connection;

mongoDB.on('error', function(err){
    if(err){
        console.log("MONGO ERROR: ", err);
    }
});

mongoDB.once('open', function(){
    console.log("CONNECTED TO MONGODB!");
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({expanded:true}));

app.set("port", (process.env.PORT || 5000));

//app.use('/things', things);

app.use('/', index);

app.listen(app.get("port"), function(){
    console.log("Listening on port: " + app.get("port"));
});