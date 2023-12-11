const {getData} = require("../database/module/home.js")

module.exports = {
  getAll: async (req, res)=> {
      try {
          const result = await getData()
          console.log(res)
       return   res.status(200).send(result[0])
      } catch (error) {
         return  res.status(500).json(err)
      }
  
       
}


} 
