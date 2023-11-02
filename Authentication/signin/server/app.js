const dotenv = require('dotenv');
const express = require("express");
const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();

dotenv.config({path:'./config.env'});
require('./db/conn');
const port =process.env.PORT  ;

//require model
const Users=require('./models/userSchema');
const cookieParser = require('cookie-parser');

//getting data from frontend
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());

app.get('/',(req,res)=>{
  res.send("hello world");
})

// Register a new user
app.post("/signup", async(req, res) => {
  try {
    // const username= req.body.username;
    // const email= req.body.email;
    // const password= req.body.password;
    const { username, email, password, isTeacher, subjects } = req.body;
    // const isTeacher= req.body.isTeacher; 
    // const subjects= req.body.subjects;


    const createUser = new Users({
      username:username,
      email:email,
      password:password,
      isTeacher: isTeacher || false, // Set a default value of false if isTeacher is not provided
      subjects: subjects || []        // Set a default empty array if subjects is not provided
    //   isTeacher:isTeacher,
    //   subjects:subjects,
    });
    
    //inserting user
    const created = await createUser.save();
    
    console.log('User created:', created);
    res.status(200).send("registered");
  } catch (error) {
    res.status(400).send(error);
  }
});

// Login and generate JWT token
app.post("/login", async (req, res) => {
    try {
        const email=req.body.email;
        const password=req.body.password;
        const user = await Users.findOne({ email:email });
        if(user){
            const isMatch=await bcryptjs.compare(password,user.password);

            if(isMatch){
                const token=await user.generateToken();
                res.cookie("jwt",token,{
                    expires:new Date(Date.now()+86400000),
                    httpOnly:true
                })
                res.status(200).send("LoggedIn")
            }else{
                res.status(400).send("Invalid Credentials");
            }
        }else{
            res.status(400).send("Invalid Credentials");
        }
    } catch (error) {
        res.status(400).send(error);
    }

});

// Protected route that requires a valid token
// app.get("/api/protected", (req, res) => {
//   const token = req.headers.authorization;

//   if (!token) {
//     return res.status(401).json({ error: "Unauthorized" });
//   }

//   jwt.verify(token, "your-secret-key", (err, decodedToken) => {
//     if (err) {
//       return res.status(401).json({ error: "Unauthorized" });
//     }

//     // Token is valid, you can access the protected resource here
//     res.status(200).json({ message: "Protected resource accessed" });
//   });
// });


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

