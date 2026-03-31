const express = require('express')
const userModel = require('../models/user.model')
const authRouter = express.Router()
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

authRouter.post('/register',async(req,res)=>{
   const {email,name,password} = req.body;

  const isUserExists = await userModel.findOne({email})

  if(isUserExists){
    return res.status(400).json({
        message:"account already exists with this email"
    })
  }

  const user = await  userModel.create(({
    email,name,password
   }))

   const token = jwt.sign({
      id:user._id,
      email:user.email
   },
   process.env.JWT_SECRET
  )

   res.cookie("jwt_token",token)
   
   res.status(201).json({
     message:"user created",
     user,
     token
   })
})

module.exports = authRouter