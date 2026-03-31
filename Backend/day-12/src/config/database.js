require('dotenv').config()

const mongoose = require('mongoose')

function connectToDB(){
  mongoose.connect(process.env.DB_URI)
  .then(()=>{
    console.log("db connected")
  })
}

module.exports = connectToDB