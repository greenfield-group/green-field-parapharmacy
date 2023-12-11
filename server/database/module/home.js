const connection = require("../index.js");

module.exports = {

  getData: async () => {
    const sql = "SELECT * FROM items";
    return connection.query(sql);
  },


};
