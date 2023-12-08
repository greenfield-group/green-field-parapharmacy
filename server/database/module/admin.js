const connection = require("../index.js")

module.exports = {
    getAll: async () => {
        const sql = "SELECT * FROM items"
        return connection.query(sql)
    },
    Add: async (title, description, price, category, image) => {
        const sql = "INSERT INTO items (title,description,price,category,image)Values(?,?,?,?,?)"
        return connection.query(sql, [title, description, price, category, image])
    },
    Delete: async (id) => {
        const sql = "DELETE FROM items WHERE iditems = ?"
        return connection.query(sql, [id])
    },

   
Update : async (id,price)=>{
    const sql = "update items SET price=? WHERE iditems =?" 
    return connection.query(sql,[price,id])
},
Getone: async (id) =>{
    const sql = "SELECT * FROM  items WHERE iditems =?"
    return connection.query(sql,[id])
}


}