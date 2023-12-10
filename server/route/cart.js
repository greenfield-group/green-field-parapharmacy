const express = require("express");
const { add, remove,bringAll, removeCart } = require("../controler/cart");

const router = express.Router();

router.post('/add',add );
// app.put('/cart/update/:itemId', );
router.get('/get/:iduser', bringAll);
router.delete('/remove/:items_iditems',remove);
router.delete('/removeall/:users_iduser',removeCart);







module.exports = router;