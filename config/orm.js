var connection = require("./connection")

var orm = {
  selectAll:function(tableName,cbModel){
var statement = connection.query("select * from ??",tableName,function(err,data){
      cbModel(data)
    })
    console.log(statement.sql);
  }
}

module.exports = orm