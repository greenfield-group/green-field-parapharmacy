const {getAll,Add,Delete,Update,Getone}= require ("../database/module/admin.js")
const jwt=require('jsonwebtoken')
module.exports ={
    getItems : async (req,res)=>{
        try {
            const result = await getAll()
            res.send(result[0])
        } catch (error) {
            console.log(error)

        }
    },
    addItems: async (req, res) => {
    //     const token =req.cookies.access_token
    //     // console.log(token)
    //     // if(!token){return res.status(401).json("not authenticate")}
    //    const verification = jwt.verify(token,'jwtkey')
    //    console.log(verification)
        const { title, description, price, category, image } = req.body
        console.log(req.body)
        try {
            const newitem = await Add(title, description, price, category, image)
            res.status(200).send('done')
        } catch (error) {
            res.status(500).send(error)

        }
    },
    DeleteItem: async (req, res) => {
        const { Id } = req.params
        try {
            const del = await Delete(Id)
            res.status(200).send('deleted')
        } catch (error) {
            res.status(500).send(error)

        }
    },
    UpdateItem: async (req, res) => {
        const { Id } = req.params
        const { price } = req.body
        try {
            const updated = await Update(Id, price)
            res.status(200).send('updated successfully')
        } catch (error) {
            res.status(500).send(error)

        } 
    },
    GetoneItem: async(req,res)=>{
        const {id}= req.params
        try {
            const one = await Getone(id)
            res.status(200).send(one[0][0])
        } catch (error) {
            res.status(500).send(error)
            

        }
    }
}