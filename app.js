const express= require("express")
const mongoose=require("mongoose")
require('dotenv').config()
const router= require("./routes/user-routes")

const app=express();
app.use(express.json())

app.use("/users",router)


mongoose.connect(`mongodb+srv://admin:${process.env.MONGO_PASS}@cluster0.jireaxl.mongodb.net/?retryWrites=true&w=majority`).then(()=>{
    app.listen(5000,()=>{
        console.log("COnnected on port 5000");
    })
}).catch((err)=> console.log(err))







// in MODEL -> will build the schema of users  (Structure of all user)
// in CONRTOLLER ->  controller contains functions used when we do API calls
// in ROUTES -> contains all the routes of the project where the routes will be called