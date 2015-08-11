var random = require('./random');
var twitterNames = ["javabatman","javathehut","javascriptoro","manmongo", "jquerycoolio", "javacriptjackson", "jqueryzoro", "nodenonsense", "angularaction", "bootstrapbill", "htmlharry", "allcssallday", "thegithubster", "masterheroku", "maddogmongo"];

function twitter () {
    var name = twitterNames[random(0, twitterNames.length-1)];
    return twitterNames[random(0, twitter.length-1)];
}

module.exports = twitter;
