const { request } = require("express");
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require("express");
const app = express();

dotenv.config({ path: './config.env'});

require('./db/conn');
// const User = require('./model/userSchema');

app.use(express.json());

// router files
app.use(require('./router/auth'));

const PORT = process.env.PORT;

/*middleware
const middleware = (req,res,next)=>{
    console.log('Hello middleware');
    next();
}*/

/*routing
app.get('/',(req, res)=>{
    res.send("home from server app.js");
});*/

//  app.get('/about',(req, res)=>{
//  console.log('Hello about');
//  res.send("about page");
    
//});

app.get('/contact',(req, res)=>{
    res.cookie("Test",'thapa');
    res.send("contact page");

});

//app.get('/signin',(req, res)=>{
//   res.send("signin page");
//});

app.get('/signup',(req, res)=>{
    res.send("signup page");
});


//server listen
app.listen(PORT,()=>{
    console.log('Server is running at port no ${PORT}');
});

