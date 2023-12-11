const express = require("express");
const router = express.Router();

const {signup,signin,logout}=require("../controler/auth.js")

router.post('/signup',signup)
router.post('/signin',signin)
router.post('/logout',logout)
module.exports = router;