//Dependencies
const orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(result) {
        cb(result);
        });
    },
    // The variables cols and vals are arrays.
    //Add new burger to db
    insertOne: function(cols, vals, cb) {
          orm.insertOne("burgers", cols, vals, function(result) {
          cb(result);
        });
    },
    updateOne: function(updateColumn, vals, id, cb) {
          orm.updateOne("burgers", updateColumn, vals, id, function(result) {
          cb(result);
        });
    }
};
  
//   Export the database functions for the controller (burgers_controller.js).
module.exports = burger;