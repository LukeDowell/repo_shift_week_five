var random = require('./random');
var first = ["Corina", "Cena", "Maria", "Matt", "Huck", "Cat", "PR", "Bob", "Sam", "Luke", "Sarah", "Suren", "Tara", "Josh", "Jim", "Ryan", "Lisa", "Brandon", "Skyler", "Eric", "Mikel", "James"];
var last = ["Mayo", "Doire", "White", "Keck", "Newberry", "Daniels", "De Grote", "Bankston", "Brunt", "Negen", "Brock", "Stommes", "Severson", "Vijayakumar", "Johnson", "Larson", "Coury", "Fix", "Bernstein",  "Stafki", "Sunders", "Peters"];

function name () {
   return first[random(0, first.length-1)] + " " + last[random(0, last.length-1)];
}

module.exports = name;