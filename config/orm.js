var connection = require("./connection");

var orm = {
  selectAll: function(tableName, cbModel) {
    var statement = connection.query("select * from ??", tableName, function(
      err,
      data
    ) {
      cbModel(data);
    });
    console.log(statement.sql);
  },
  insertOne: function(tableName, columnNames, valueNames, cbModel) {
    var statement = connection.query(
      "insert into ?? (??,??) values  ( ? ,   ?)",
      [tableName, ...columnNames, ...valueNames],
      function(err, data) {
        cbModel(data);
      }
    );
    console.log(statement.sql);
  },
  updateOne: function(tableName, columnNames, values, cbModel){
    var statement = connection.query("update ?? set ?? = ? where ?? = ?", [tableName, columnNames[0],values[1],columnNames[1], values[0]],
    
    function(err,data){
      cbModel(data)
    }  )

    console.log(statement.sql)
  }
};

module.exports = orm;
