const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const user = require("./Routes/userRoute")
//Middle wares
app.use(cors())
app.use(express.json())
app.use("/user",user)

const DATABASE_URI = "mongodb+srv://sahilKatoch:sahil111@cluster0.ydjgm.mongodb.net/users?retryWrites=true&w=majority";
const PORT = 5000;

mongoose.connect(DATABASE_URI,{useNewUrlParser:true},()=>{
    try{
    console.log("Successfully connected to Database")
    }catch(err){
        console.log("Cannot connect with database")
    }
});
app.listen(PORT,()=>{
    try{
    console.log(`Server is running on port ${PORT}`)
    }catch(err){
        console.log("Error occurred");
    }
})