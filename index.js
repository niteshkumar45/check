const express = require('express')
const app = express()

app.get("/",(req,res)=>{
    console.log("request on home page");
    res.send("this is home page")
})

app.listen(3200,()=>{
    console.log("the server is started");
})