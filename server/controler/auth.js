const bcryptjs = require('bcryptjs')
const { getallUsers,insertUser } = require('../database/module/auth.js')
module.exports = {
    signup: async (req, res) => {
        const { name, email, password, admin } = req.body
        const q = await getallUsers(email)
        console.log(q)
        if (q[0].length) {
            return res.status(409).json("userAlreadyexist")
        }
        const salt =bcryptjs.genSaltSync(5)
        const hach=bcryptjs.hashSync(password,salt)
        insertUser(name, email, hach, admin).then(()=>{res.status(200).json('done') })
        .catch((err)=>{res.status(500).json(err.message)})
    },
    signin:async(req,res)=>{
        
    }


}