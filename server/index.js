const express = require("express");
const db=require("./database/index.js")
const cors = require("cors");
const coukieparser=require("cookie-parser")


const userroutes=require("./route/user.js")
const adminroutes=require("./route/admin.js")
const cartroutes=require("./route/cart.js")
const homeroutes=require("./route/home.js")
const authroute=require('./route/auth.js')

const PORT = 5000;
const app = express();
app.use(express.json())
app.use(cors());
app.use(coukieparser())
app.use("/api/users", userroutes);
app.use("/api/admin", adminroutes);
app.use("/api/cart",cartroutes);
app.use("/api/home",homeroutes)
app.use("/api/auth",authroute)
app.get("/",(req,res)=>{
  res.json('hello word')
})

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
  });