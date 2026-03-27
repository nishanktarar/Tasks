const express = require('express');

const app = express();

app.use(express.json());

const notes=[]

app.post('/notes',(req,res)=>{
    notes.push(req.body);
    res.send("notes created"); 
})

app.get('/notes',(req,res)=>{
    res.send(notes);
})

app.listen(3000,()=>{
    console.log("server is running pon port 3000");
})