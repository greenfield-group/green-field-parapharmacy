const {getAll} = require ("../database/module/users")
module.exports = {
    getItems : async (req, res)=> {
        try {
            const result = await getAll()
            res.send(result[0])
            
        } catch (error) {
            console.log(error)
            
        }
    //     getAll(function(err, results) {
    //     if(err) res.status(500).send(err);
    //     else res.json(results)
    // })
         
}


 } 


