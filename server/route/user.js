const express = require("express");
const router = express.Router();

const {getItems}= require("../controler/user.js")

router.get("/getAll",getItems)







module.exports = router;