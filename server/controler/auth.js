const bcryptjs = require('bcryptjs')
const { getallUsers,insertUser } = require('../database/module/auth.js')
module.exports = {
    signup: async (req, rep) => {
        const { name, email, password, admin } = req.body
        const q = await getallUsers(email)
        if (q.data.length) {
            return res.status(409).json("userAlreadyexist")
        }
        const salt =bcryptjs.genSaltSync(10)
        const hach=bcryptjs.hashSync(password,salt)
        insertUser(name, email, hach, admin).then(()=>{res.status(200).json('done') })
        .catch((err)=>{res.status(500).json(err.message)})
    }
}