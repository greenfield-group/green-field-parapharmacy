const express = require("express");
const { add, remove,bringAll } = require("../controler/cart");

const router = express.Router();

router.post('/add',add );
// app.put('/cart/update/:itemId', );
router.get('/get/:iduser', bringAll);
router.delete('/remove/:item_iditem',remove);








module.exports = router;