const { addToCart, removeFromCart } = require("../../server/database/module/cart");

module.exports = {
  add: async (req, res) => {
    try {
      const { items_iditems, users_iduser } = req.body;

      const result = await addToCart(items_iditems, users_iduser);

      res
        .status(200)
        .json({ message: "Item added to cart successfully", result });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  remove: async (req, res) => {
    try {
      const { itemId } = req.params;
console.log(itemId); 
      if (!itemId) {
        return res.status(400).json({ error: 'Cart ID is required' });
      }
      
      
      await removeFromCart(itemId);

      
      return res.status(200).json({ message: 'Item deleted' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  },
}



