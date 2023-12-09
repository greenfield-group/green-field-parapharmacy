const express = require("express");
const { add, remove } = require("../controler/cart");
const router = express.Router();

router.post('/add',add );
// app.put('/cart/update/:itemId', );
// app.get('/cart/view', );
router.delete('/remove/:itemId',remove);








module.exports = router;