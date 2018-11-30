var orm = require("../config/orm.js");


var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(cols, values, cb) {
      orm.insertOne("burgers", cols, values, function(res) {
        cb(res);
      });
    },
    updateOne: function(cols, condition, cb) {
      orm.updateOne("burgers", cols, condition, function(res) {
        cb(res);
      });
    },
};

module.exports = burger;