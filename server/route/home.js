const express = require("express");
const router = express.Router();


const {getAll}= require ("../controler/home.js");
router.get("/get", getAll)






module.exports = router;