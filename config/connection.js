// @author: Sal Giani
// @github: sallybananas
// @comment: Homework 14 - Handlebars - Eat the Burger!



// Node Dependency
var mysql = require('mysql');
var connection;

// For Heroku Deployment vs. Local MySQL Database
if(process.env.xxxxx_URL){
  connection = mysql.createConnection(process.env.xxxxx_URL);
}
else{
  connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '', // Add your password
    database : 'burgers_db' // Add your database
  });
}


// Export the Connection
module.exports = connection;