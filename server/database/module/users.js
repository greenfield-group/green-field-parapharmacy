const connection = require("../index.js");

module.exports={
    getAll :async  ()=>{
        const sql= "SELECT * FROM items"
         return connection.query(sql)
    }
    
}
 