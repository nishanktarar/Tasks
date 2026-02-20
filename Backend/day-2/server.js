const express=require('express');


const app=express();

app.listen(3000);

app.get('/',(req,res)=>{
    res.send("Hello World");
})

app.get('/about',(req,res)=>{
    res.send("This is the about page of our website");
})

app.get('/home',(req,res)=>{
    res.send("This is the home page of the website");
})
app.get('/contact',(req,res)=>{
    res.send("this is contact page");
})