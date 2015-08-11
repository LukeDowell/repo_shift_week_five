# Summary
Prime Academy occasionally assigns repo shift challenges. Our class is split into several groups and each group is given a branch to start with. We begin on the project and at random points throughout the day, our instructor will tell us to push our changes and checkout a different branch. It is an exercise designed to force us to comment well and deal with frustrating circumstances. This is my group's final branch.

# Prime Repo Shift Challenge 2!

Welcome back for another round of Repo Shift!

In this challenge, you will be building an application that uses jQuery, Node.js, Express.js, and MongoDB. A little styling would not hurt either, so we will be adding in some Bootstrap to make things look great and to add a little to the challenge.

Your group will be creating an application that generates users. Specifically, their name, age, sex, location, and Twitter handle. The trick however, is all of this needs to happen server side. The client side will just be requesting the information back from the server. Once it gets the information, it will be displaying it on the DOM. 

When the application loads, have a button in the center of the top of the page that reads 'Get Users'. When that button is clicked, it will tell the server that it is requesting information with a 'GET' request. Once the GET request is received by the server, it will generate 20 users. All of those users will be written to the database, then all of that information will be sent back down to the client to be rendered. The information needs to be stored in a Mongo Database as the Client experience will be able to delete users. 

To create a user, you will need seperate modules for Name, Age, Sex, Location, and Twitter Handle. It should be all controlled off of one main module that is used to generate one user. The module should be fired off by another module that is used to create 20 users. Then that module will write those users to the database, and then once all of that is complete, all the information is sent back to the Client in one JSON response. 

The Client Experience should display all of the information, but structed in a specific way. The information should be in a Bootstrap 'well' container, and have a col-md-3 width. Meaning that there will be 4 users per 'row'. The Client experience should also have a delete button that deletes the user both in the DOM and in the Database. 

Remember that you will be shifting REPOs with other teams after a while. Leave good notes for the next team.
All other details of this project can be determined by your team.

Good Luck!
