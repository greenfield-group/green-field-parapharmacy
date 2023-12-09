
const connection = require("../index")
module.exports = {
addToCart:async(items_iditems, users_iduser)=> {
const sql="INSERT INTO cart (users_iduser, items_iditems) VALUES (?, ?)"
return connection.query(sql,[users_iduser,items_iditems])
},



removeFromCart: async (iditem) => {
    const sql = "DELETE FROM cart WHERE items_iditems=?";
    
  return   connection.query(sql, [iditem]);
},


getAllFromCart:async(users_iduser)=>{
    const sql="SELECT * FROM cart WHERE users_iduser=?"
    return connection.query(sql,[users_iduser])

}}
