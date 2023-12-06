const express = require("express");
const cors = require("cors");
const db = require("./database");
const userroutes=require("./route/user.js")
const adminroutes=require("./route/admin.js")
const cartroutes=require("./route/cart.js")
const homeroutes=require("./route/home.js")
const PORT = 3000;
const app = express();
app.use(express.json())
app.use(cors());
app.use("/api/users", userroutes);
app.use("/api/admin", adminroutes);
app.use("/api/cart",cartroutes);
app.use("/api/home",homeroutes)

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
  });