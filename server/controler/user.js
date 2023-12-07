const {getAll} = require ("../database/module/users")
module.exports = {
    getItems : async (req, res)=> {
        try {
            const result = await getAll()
            res.send(result[0])
            
        } catch (error) {
            console.log(error)
            
        }
    
         
}


 } 


