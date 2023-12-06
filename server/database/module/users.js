const conn = require("../index.js");

module.exports={
    getAll :async function(callback){
        const sql= "SELECT * FROM items"
        conn.query(sql,function (error, results) {
            callback(error, results);
          })
    }
}
 