const conn =require('../index.js')
module.exports ={
    getallUsers: async(email)=>{
        const sql ="select * from users where email= ?"
      return   conn.query(sql,[email])
},
   insertUser:async(name, email, password, admin)=>{
    const sql="insert into users (name, email, password, admin) values (?,?,?,?)"
    return conn.query(sql,[name, email, password, admin])
   }
}