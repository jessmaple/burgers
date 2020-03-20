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
}
// export function (or anything in the file)
module.exports = burgers_controller;
