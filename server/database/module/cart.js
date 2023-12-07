
const connection = require("../index")
module.exports = {
addToCart:async(items_iditems, users_iduser)=> {
const sql="INSERT INTO cart (users_iduser, items_iditems) VALUES (?, ?)"
return connection.query(sql,[items_iditems,users_iduser])
},


removeFromCart:async(idcart)=> {
    const sql ="DELETE FROM cart WHERE idcart=?"
    return connection.query(sql,[idcart])
}

}
