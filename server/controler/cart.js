const { addToCart,removeFromCart, getAllFromCart, removeAllCart } = require("../../server/database/module/cart");


module.exports = {
  add: async (req, res) => {
    try {
      const { items_iditems, users_iduser } = req.body;

      const result = await addToCart(items_iditems, users_iduser);

    
        res.status(200)
        .json({ message: "Item added to cart successfully", result });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  remove: async (req, res) => {
    try {
      const { items_iditems } = req.params;


      
      await removeFromCart(items_iditems);

      
      res.status(200).json({ message: 'Item deleted' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  },


bringAll:async(req,res)=>{
  const {iduser}= req.params


  try{
    const result=await getAllFromCart(iduser)
    
    
    res.json(result[0])

  }catch(error){
console.log(error);
res.status(500).json('Server Error')
  }
},
removeCart:async(req,res)=>{
  const { users_iduser } = req.params;
try{
  const result=await removeAllCart(users_iduser)
  res.status(200).json({ message: 'Item deleted' });
}catch (error) {
  console.error(error);
  return res.status(500).json({ error: 'Internal Server Error' });
}
}

}