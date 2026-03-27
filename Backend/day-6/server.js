const app=require('./src/app')

require('dotenv').config();

const mongoose = require("mongoose")
const db_URL= process.env.DB_URL;

function connectToDb(){
    mongoose.connect(db_URL)
    .then(()=>{
        console.log("database connected")
    })
}

connectToDb();

app.listen(3000,()=>{
    console.log("server is running on port 3000.....")
})