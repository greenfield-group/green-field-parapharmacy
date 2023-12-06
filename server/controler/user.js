const {getAll} = require ("../database/module/users")
module.exports = {
    getItems :async function(req, res) {

    getAll()
    .then((response)=>{
        res.status(200).send(response)

    }).catch((error)=>{
        console.log(error)
    })
                
}








}