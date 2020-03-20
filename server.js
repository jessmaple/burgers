//create server with expresss, route, listener
// require = import, it is an import function
var express = require("express");
var app = express();

var expressHBS = require("express-handlebars")
app.engine("handlebars", expressHBS({
    defaultLayout:"main"
}))
app.set("view engine", "handlebars")
// if tests conditions , if is for testing true or false 
// or statements, at least one condition is true 
// process.env.PORT for heroku
//  || is an OR operator 
var PORT = process.env.PORT ||  8000 
// Port is a dedicated tunnel for server to listen, server listening for requests

// app.use() is a function call, 
app.use(express.static("public"))

// Middlewear parse the users data and then converts tp JSON  
app.use(express.urlencoded({extended:true}))

// the results go in request.body, 
app.use(express.json())

// Required is like src (script tag) 
var burgers_controllers = require("./controllers/burgers_controllers")

burgers_controllers(app)

// CRUD 
// get request -  read data and return data
// post request - Post creates an entry into a table 
// put request - update statment based on primary key and updates entire row
// delete request - deletes entire row based pn primary key 

app.listen(PORT,function(){
    console.log("app is listening http://localhost:" + PORT)
})

// After the setup, run in terminal 