var orm = require("../config/orm");
var burger = {
  selectAll: function(cbController) {
    orm.selectAll("burgers", function(data) {
      cbController(data);
    });
  },
  insertOne: function(newBurger, cbController) {
    orm.insertOne(
      "burgers",
      ["burger_name", "devoured"],
      [newBurger, false],
      function(data) {
        cbController(data);
      }
    );
  },
  updateOne: function(id, cbController) {
    orm.updateOne("burgers", ["devoured", "id"], [id, true], function(data) {
      cbController(data);
    });
  }
};
// creating ORM , how sequelize came to be
module.exports = burger;
