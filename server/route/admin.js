const express = require("express");
const router = express.Router();


const {getItems,addItems,DeleteItem,UpdateItem}= require ("../controler/admin.js")

router.get("/getAll",getItems)
router.post("/Add",addItems)
router.delete("/Delete/:Id",DeleteItem)
router.put("/update/:Id",UpdateItem)





module.exports = router;