const userModel = require("../models/users.model");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");


 async function registerController(req, res) {
  const { username, email, password, bio, profileImage } = req.body;

  const isUserAlreadyExists = await userModel.findOne({
    $or: [{ username }, { email }]
  });

  if (isUserAlreadyExists) {
    return res.status(409).json({
      message:
        "user already exists" +" "+
        (isUserAlreadyExists.email === email
          ? "email already exists"
          : "username already exists")
    });
  }


  const hash = await bcrypt.hash(password,10)

  const user = await userModel.create({
    username,
    email,
    bio,
    profileImage,
    password: hash
  });

   const token = jwt.sign({
    id: user._id
  },process.env.JWT_KEY,
  {expiresIn:'1h'});

  res.cookie("token", token);

  res.status(201).json({
    message:"user created sucessfully",
    user:{
        username:user.username,
        email:user.email,
        bio:user.bio,
        profileImage:user.profileImage,

    }
  })
}



async function loginController(req,res){
  
    const {username, email, password} = req.body


    const user = await userModel.findOne({
        $or:[
            {
                username:username
            },
            {
                email:email
            }
        ]
    })

    if(!user){
        return res.status(404).json({
            message:"user not found"
        })
    }

    const isPasswordValid = await bcrypt.compare(password,user.password)
 
    if(!isPasswordValid){
        return res.status(401).json({
          message:"invalid password"
        })
    }
   

    const token = jwt.sign({
        id:user._id
    },process.env.JWT_KEY,{expiresIn:'1d'})

    res.cookie("token",token)



    res.status(200).json({
        message:"loggedd in ",
        user:{
            username:user.username,
            email:user.email,
            bio:user.bio,
            profileImage:user.profileImage
        }
    })
}

module.exports = {
    registerController,
    loginController
}