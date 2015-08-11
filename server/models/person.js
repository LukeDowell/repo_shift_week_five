var mongoose = require('mongoose');

var PersonSchema = new mongoose.Schema({
    //key ; data type
    name : String,
    age: Number,
    gender: String,
    location: String,
    twitterhandle: String
});

module.exports = mongoose.model("person", PersonSchema);