// Create a function
var burger = require("../models/burgers")
// app is the express selector, app creates the request
function burgers_controller(app){
app.get("/api/burgers", function(req,res){
burger.selectAll("burgers",function(data){
  res.render("index",data)
})
})
}
// export function (or anything in the file)
module.exports = burgers_controller