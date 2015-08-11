$(document).ready(function(){
    requestUsers();
    $("#genUserBtn").on('click', function() {
        generateAndPopulate();
    });

    $(".person-container").on('click', 'button', function() {
       var id = $(this).data('id');
        var parent = $(this).closest('.employee-card');
        deleteUser(id, parent);
    });
});

/**
 * Generates 20 new users and requests all the users from the server
 */
function generateAndPopulate() {
    //Generate
    $.ajax({
        type: "POST",
        url: "/data/" + 20,
        success: function() {
            requestUsers();
        }
    })
}

/**
 * Requests existing users
 */
function requestUsers() {
    $.ajax({
        type: "GET",
        url: "/data",
        success: function(data) {
            appendPeople(data);
        }
    })
}

/**
 * Deletes a document with a specified id from the database
 * @param id
 *      The id to find and delete
 * @param element
 *      The element to remove if the delete is successful
 */
function deleteUser(id, element) {
    $.ajax({
        type: "DELETE",
        url: "/data/"+id,
        success: function(data) {
            console.log(data);
            element.remove();
        }
    })
}

/**
 * Appends all of our people to the dom
 * @param people
 */
function appendPeople(people) {
    var $container = $(".person-container").empty();
    while(people.length > 0) {
        var $row = $("<div/>", {class:'row'});
        for(var i = 0; i < 4; i++) {
            var person = people.shift();
            var $card = $("<div/>", {class: "employee-card col-md-3"});
            var $panel = $("<div/>", {class:"panel panel-primary"});
            var $panelHead = $("<div/>", {class:"panel-heading"});
            var $panelBody = $("<div/>", {class: "panel-body"});

            //ICONS
            var $twitterIcon = $("<i/>", {class:"fa fa-twitter"});
            var $globeIcon = $("<i/>", {class:"fa fa-globe"});
            var $wrenchIcon = $("<i/>", {class:"fa fa-wrench"});
            var $hourglassIcon = $("<i/>", {class:"fa fa-hourglass-start"});

            //Person info
            var $twitter = $("<p>", {text: person.twitterhandle}).prepend($twitterIcon);
            var $age = $("<p>", {text: person.age}).prepend($hourglassIcon);
            var $sex = $("<p>", {text: person.gender}).prepend($wrenchIcon);
            var $location = $("<p>", {text: person.location}).prepend($globeIcon);
            var $name = $("<h2/>", {text: person.name});

            var $closeButton = $("<button/>", {class: "btn btn-danger", text: "X", 'data-id': person._id});

            $panelHead.append($name);
            $panelHead.append($closeButton);

            $panelBody.append($twitter);
            $panelBody.append($age);
            $panelBody.append($sex);
            $panelBody.append($location);

            $panel.append($panelHead);
            $panel.append($panelBody);
            $card.append($panel);
            $row.append($card);
        }
        $container.append($row);
    }
}