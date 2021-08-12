const  jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const authenticate = require('../middileware/authenticate');


require('../db/conn');
const User = require("../model/userSchema");

router.get('/',(req, res)=>{
    res.send("home from server auth.js");
});
    // ECMA 2015
    //using Promises
  /*  router.post('/register', (req,res)=>{
        const{ name, email, phone, work, password, confirmPassword } = req.body;

        if(!name || !email || !phone || !work || !password || !confirmPassword){
            return res.status(422).json({error: "Please fill field properly"});
        }

        User.findOne({email:email}).then((userExist)=>{
            if(userExist){
            return res.status(422).json({error:"Email Already Exist"});
            }
            const user = new User({name, email, phone, work, password, confirmPassword});

            user.save().then(()=>{
                res.status(201).json({message: "User Registered Successfully"});
            }).catch((err)=> res.status(500).json({error:"Failed to Register"}));
        }).catch(err =>{ console.log(err);});
    }); */

    //using async / await
    router.post('/register', async(req,res)=>{
        const{ name, email, phone, work, password, confirmPassword } = req.body;

        if(!name || !email || !phone || !work || !password || !confirmPassword){
            return res.status(422).json({error: "Please filled your text"});
        }
        try{
           const userExist = await User.findOne({email:email}); 

           if(userExist){
                return res.status(422).json({error:"Email Already Exist"});
            }else if (password != confirmPassword){
                return res.status(422).json({error: "Password does not match"});
            }else{
                const user = new User({name, email, phone, work, password, confirmPassword});
             
            await user.save();

            res.status(201).json({message: "User Registered Successfully"});
            }
              
        }catch(err){
            console.log(err);
        }
      
    });

  // login route
    router.post('/signin', async (req,res)=>{
       //  console.log(req.body);
       //  res.json({message:"Awesome"});
       let token;
       try{
           const{ email, password } = req.body;
            //validation
           if(!email || !password){
               return res.status(400).json({error:"Please fill the data"});
           }
           
           const userLogin =  await User.findOne({ email:email });

         //  console.log(userLogin);
           if(userLogin){
                const isMatch = await bcrypt.compare(password, userLogin.password);

                token = await userLogin.generateAuthToken();
                console.log(token);

                res.cookie("jwtoken",token,{
                    expires: new Date(Date.now()+25892000000),
                    httpOnly:true
                });

            if(!isMatch){
                res.status(400).json({error:"Invalid credentials"});
            }else{
                res.json({message:"Signin Successfully"});
            }
            }else{
            res.status(400).json({error:"Invalid credentials"});
            }
           
        } 
        catch(err){
           console.log(err);
       }
    });

    // about us
router.get('/about', authenticate,(req, res)=>{
    console.log('Hello about');
    res.send('About form server');
     //  res.send("about page");
 });
  
module.exports = router;
