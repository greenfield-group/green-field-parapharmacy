const express = require("express");
const router = express.Router();

const {signup}=require("../controler/auth.js")
router.post('/signup',signup)

module.exports = router;