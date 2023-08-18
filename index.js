const express = require('express')
const app = express()
let count = 0;

app.get("/",(req,res)=>{
    console.log(`request on home page ${count} time`);
    res.send(`this is home page ${count}`)
    count++;
})

app.listen(3200,()=>{
    console.log("the server is started nitesh");
})