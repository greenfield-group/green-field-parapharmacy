const express = require("express");
const router = express.Router();

const getAll= function (callback) {
  const sql = 'SELECT * FROM `users`'
  conn.query(sql, function (error, results) {
    callback(error, results);
  });
}





module.exports = router;