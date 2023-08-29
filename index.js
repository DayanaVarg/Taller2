
const express =require("express");
const path = require('path');
const app =express();

app.get("/",(req,res)=>(
      res.sendFile(path.join(__dirname + "/src/index.html"))
));
app.listen(3001, ()=>(
      console.log("El servidor está corriendo en el puerto",3001)
))