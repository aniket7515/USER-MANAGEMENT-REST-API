const express= require("express")
const mongoose=require("mongoose")
require('dotenv').config()
const app=express();


mongoose.connect(`mongodb+srv://admin:${process.env.MONGO_PASS}@cluster0.jireaxl.mongodb.net/?retryWrites=true&w=majority`).then(()=>{
    app.listen(5000,()=>{
        console.log("COnnected on port 5000");
    })
}).catch((err)=> console.log(err))