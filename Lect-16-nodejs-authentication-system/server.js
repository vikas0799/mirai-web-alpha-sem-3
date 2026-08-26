// const server=require("./src/app");
// const dotenv=require("dotenv");
// dotenv.config();
// const PORT=process.env.PORT || 5000







// server.listen(PORT,(error)=>{
//     console.log(`server is runing at ${PORT}`);
// });



const express=require("express");
const bcrypt=require("bcrypt");

const app=express();

app.post("/register",async(req,res)=>{

    const {name,age,username,password}=req.body;

    //db query
    // const hashedPassword=await bcrypt.hash(password,10);
    // student.create(hashpassword)


    //res.redirect("/login");

// Hashing 
// const password="harsh123";
// const hashedPassword=await bcrypt.hash(password,10);
// console.log(password,hashedPassword);

res.send("data stored");
})

app.post("/login",(req,res)=>{
    // const {username,password}=req.body;
// Comparing password
// data=student.findOne(username);
    //  data.hashpassword
const isMatch=await bcrypt.compare("harsh123",hashedPassword);
if(isMatch){
    //protected route
    res.redirect("/netflixdashboard");
}
else{
    throw new Error("wrong login credentials");
    
}

})


app.listen(3000,()=>{
    console.log("seerv is runing at 3000");
})