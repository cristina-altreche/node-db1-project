const db = require("../data/dbConfig");

module.exports = {
    get,
    getById
}

function get() {
    return db("accounts");
  }
  
  function getById(id) {
    return db("accounts").where({ id }).first();
  }