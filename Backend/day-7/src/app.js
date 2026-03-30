const express = require("express")
const noteModel=require('./models/notes.model')
const app = express()

app.use(express.json())

// Post
app.post('/notes', async (req,res)=>{
  const {title,description}=req.body  
  
  const notes = await noteModel.create({
    title,description
  })

  res.status(201).json({
    message:"note created",
    notes 
  })
})

// Get
app.get('/notes', async (req,res)=>{
    const notes = await noteModel.find()

  res.status(200).json({
    message:"all notes fetched sucessfully",
    notes
  })
})




module.exports = app;