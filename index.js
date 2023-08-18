const express = require('express')
const app = express()
let count = 0;

app.get("/",(req,res)=>{
    console.log(`request on home page ${count} time`);
    count++;
    res.send("this is home page")
})

app.listen(3200,()=>{
    console.log("the server is started");
})