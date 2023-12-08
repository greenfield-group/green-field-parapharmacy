const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { getallUsers, insertUser } = require('../database/module/auth.js')
module.exports = {
    signup: async (req, res) => {
        const { name, email, password, admin } = req.body
        const q = await getallUsers(email)
        console.log(q)
        if (q[0].length) {
            return res.status(409).send("userAlreadyexist")
        }
        const salt = bcryptjs.genSaltSync(5)
        const hach = bcryptjs.hashSync(password, salt)
        insertUser(name, email, hach, admin).then(() => { res.status(200).json('done') })
            .catch((err) => { res.status(500).json(err.message) })
    },
    signin: async (req, res) => {

        const q = await getallUsers(req.body.email)
        console.log(q)
        if (q[0].length === 0) {
            return res.status(409).json("usernotexist")
        }
        console.log(q[0][0].password)

        const isPasswordcorrect = bcryptjs.compareSync(req.body.password, q[0][0].password);
        if (!isPasswordcorrect) { return res.status(409).json("password incorrect") }
        const { password, ...other } = q[0][0]
        const token = jwt.sign({ id: q[0].iduser }, 'jwtkey')
        res.cookie("acces_token", token, { httpOnly: true }).status(200).json(other)


    },
    logout:(req,res)=>{
        res.clearCookie("acces_token",{
            sameSite:"none",
           secure:true,
        }).status("200").json('user has been loged out')
    }


}