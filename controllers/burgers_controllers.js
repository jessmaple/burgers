// Create a function
var burger = require("../models/burgers");
// app is the express selector, app creates the request
function burgers_controller(app) {
  app.get("/", function(req, res) {
    burger.selectAll(function(data) {
      console.log(data);
      res.render("index", {
      burgers:data});
    });
  });

  app.post("/api/burgers", function(req,res){
    var newBurger = req.body.burger_name
    burger.insertOne( newBurger, function(data){
      res.json(data)
    } )
  })

}
// export function (or anything in the file)
module.exports = burgers_controller;
