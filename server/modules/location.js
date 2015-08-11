var random = require('./random');

function location() {
    var location = ["Blaine", "Maple Grove", "Mars", "Amurrica", "Blaine SUCKS!", "MOA", "Blaine is dumb!", "Minneapolis.", "Rome", "Yo momma's!", "Prime", "Space", "Moon", "St.Paul", "Antarctica", "Halloween Town.", "Portadge", "California", "Colorado", "South America", "Denver", "Florida"];

    var locationName = location[random(0, location.length-1)];
    return locationName;
}

module.exports = location;
