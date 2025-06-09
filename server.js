const express = require("express");
const fs =require("fs");
const app = express();
const port =5000;

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(`${__dirname}`))
app.listen(port,()=>{
    console.log(`server started http://localhost:${port}`)
    
})
app.get("/", (req, res) => {
    res.sendFile("index.html")
})