const connection = require('./connection').burgersDB;

let tableName = "burgers";

console.log("heyQueen");

let orm = {
  // Get all burgers from the database
  selectAll: function(callback){
    let s = 'SELECT * FROM ' + tableName;
    connection.query(s, function(err, result) {

      callback(result);

    });
  },

  // Add new burger to the database
  insertOne: function(burgerName, callback){
    let s = "INSERT INTO " + tableName + " (burger_name, devoured) VALUES (?,?)";
    // Default value of false 
    let burgerDevoured = false;
    connection.query(s, [burgerName, burgerDevoured], function(err, result) {
      if(err) console.log(err);
      
      callback(result);

    });
  },
  // Update a burger
  updateOne: function(burgerId, callback){
    
    let s = "UPDATE " + tableName + " SET devoured=1 WHERE id=?";

    connection.query(s, [burgerId], function(err, result) {
      if(err) console.log(err);

      callback(result);

    });
  }
}


module.exports = orm;