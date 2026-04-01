const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        unique:[true,"account already exists"]

    },
    name:String,
    password:String,
})

const userModel = mongoose.model("users",userSchema)

module.exports = userModel