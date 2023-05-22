const express = require('express');
const app = express();
const port = 3000;
const mongoose = require("mongoose");

const userRoutes = require('./routes/userRoutes');

async function main(){

    await mongoose.connect('mongodb+srv://michellrahman:AMU2R4Ihqd6yxjkS@cluster0.skg1eyo.mongodb.net/?retryWrites=true&w=majority')
}

main().catch(err => console.log(err));

app.use(express.json());
app.use(express.urlencoded({extended: true}))






app.use("/api/user", userRoutes)

app.get("/", (req, res)=>{

    res.json({
        message:"hello"
    })
})


app.listen(port , ()=>{
    console.log("listening on port: " , port)
})