const express = require('express');
const router = express.Router();
const User = require("../models/userSchema")

//return users
router.get("/", async(req,res) =>{

    try{

        const result = await User.find();

        res.json(result)

    } catch (err){
        console.log(err)
    }

});


//add user
router.post("/", async (req,res) =>{
    console.log("create user", req.body)

    try{

        const result = await User.create({
            email: req.body.email,
            password: req.body.password
        });

        res.json(result)

    } catch (err){
        console.log(err)
    }
    
});



router.post("/login", async (req,res) =>{
    console.log("login", req.body)

    try{

        const targetUser = await User.findOne({
            email: req.body.email,
        });

        console.log("targetUser", targetUser)

        if(targetUser){

            if(targetUser.password == req.body.password){
                console.log("login success")

                res.json(targetUser)
                //login
            } else {
                
                res.json({message: "wrong password"})
            }

        } else {
            res.json({message: "user not found"})
        }

       

    } catch (err){
        console.log(err)
    }
    
});


module.exports = router;
