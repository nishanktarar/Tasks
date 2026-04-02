const express = require('express');
const authRouter = express.Router();
const userModel = require('../models/user.model')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

authRouter.post('/register', async (req,res)=>{
  const {name,email,password} = req.body;

  const isUser = await userModel.findOne({email})

  if(isUser){
    return res.status(409).json({
        message:"user already exists"
    })
  }

  const hash = crypto.createHash('sha256').update(password).digest('hex');

  const user = await userModel.create({
    name,
    email,
    password:hash
  })
  
const token = jwt.sign({
    id:user._id,
},process.env.JWT_SECRET,{expiresIn:"1h"})

 res.cookie("token",token)

 res.status(201).json({
    message:"user created successfully",
    user
 })
  

})


authRouter.get('/get-user',async (req,res)=>{
   const token = req.cookies.token

   const decoded = jwt.verify(token,process.env.JWT_SECRET)

   const user = await userModel.findById(decoded.id)

   res.json({
    name:user.name,
    email:user.email
   })
})

module.exports = authRouter;