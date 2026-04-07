const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:[true,"userrname exists"],
        required:[true,"username required"]
    },
    email:{
        type:String,
        unique:[true,"email already exists"],
        required:[true,"username required"]
    },
    password:{
        type:String,
        required:[true,"username required"]
    },
    bio:String,
    profileImage:{
        default:"https://ik.imagekit.io/t5yxzczeox/default%20img.avif",
        type:String,
    }
})

const userModel= mongoose.model("users",userSchema);

module.exports = userModel