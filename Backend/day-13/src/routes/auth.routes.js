const express = require("express");
const userModel = require("../models/user.model");
const authRouter = express.Router();
const jwt = require("jsonwebtoken");
const crypto = require('crypto')

authRouter.post("/register", async (req, res) => {
  const { email, name, password } = req.body;

  const isUserExists = await userModel.findOne({ email });

  if (isUserExists) {
    return res.status(409).json({
      message: "account already exists with this email"
    });
  }
  
  const hash = crypto.createHash('md5').update(password).digest("hex")

  const user = await userModel.create({
    email,
    name,
    password:hash
  });

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email
    },
    process.env.JWT_SECRET
  );

  res.cookie("jwt_token", token);

  res.status(201).json({
    message: "user created",
    user,
    token
  });
});

authRouter.post("/protected", (req, res) => {
  console.log(req.cookies);

  res.status(200).json({
    message: "cookies fetched  from the client side"
  });
});

authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });

  if (!user) {
    return res.status(401).json({
      message: "user does not exists"
    });
  }

  const isPasswordMatched = user.password === crypto.createHash('md5').update(password).digest("hex");

  if (!isPasswordMatched) {
    return res.status(401).json({
      message: "Invalid Password"
    });
  }
  const token = jwt.sign(
    {
      id: user._id
    },
    process.env.JWT_SECRET
  );

  res.cookie("jwt_token", token);

  res.status(201).json({
    message: "user logged in",
    user
  });
});

module.exports = authRouter;
