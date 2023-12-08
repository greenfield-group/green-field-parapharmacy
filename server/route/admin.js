const express = require("express");
const router = express.Router();


const {getItems,addItems,DeleteItem,UpdateItem,GetoneItem}= require ("../controler/admin.js")

router.get("/getAll",getItems)
router.post("/Add",addItems)
router.delete("/Delete/:Id",DeleteItem)
router.put("/update/:Id",UpdateItem)
router.get("/Getone/:id",GetoneItem)





module.exports = router;