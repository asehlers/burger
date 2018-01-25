// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    console.log("burger.js selectAll");
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, cb) {
    console.log("burger.js insertOne");
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    console.log("burger.js updateOne");
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  // delete: function(condition, cb) {
  //   orm.delete("burgers", condition, function(res){
  //     cb(res);
  //   });
  // }
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;
