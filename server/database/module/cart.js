
const connection = require("../index")
module.exports = {
addToCart:async(items_iditems, users_iduser)=> {
const sql="INSERT INTO cart (users_iduser, items_iditems) VALUES (?, ?)"
return connection.query(sql,[items_iditems,users_iduser])
},


removeFromCart:async(users_iduser, items_iditems)=> {
    const sql ="DELETE FROM cart WHERE users_iduser=? AND items_iditems=?"
    return connection.query(sql,[users_iduser, items_iditems])
}

}
