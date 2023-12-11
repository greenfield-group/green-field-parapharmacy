
const connection = require("../index.js")
module.exports = {
addToCart:async(items_iditems, users_iduser)=> {
const sql="INSERT INTO cart (users_iduser, items_iditems) VALUES (?, ?)"
return connection.query(sql,[users_iduser,items_iditems])
},



removeFromCart: async (items_iditems) => {
    const sql = "DELETE FROM cart WHERE items_iditems=?";

  return   connection.query(sql, [items_iditems]);
},

removeAllCart:async (users_iduser)=>{
    const sql="DELETE FROM cart WHERE users_iduser=?"
    return connection.query(sql,[users_iduser])
},



getAllFromCart:async(users_iduser)=>{
    const sql=`select * from items INNER JOIN cart 
    on items.iditems =cart.items_iditems INNER JOIN users 
    on cart.users_iduser = users.iduser where cart.users_iduser=?`
    return connection.query(sql,[users_iduser])

    
}}
