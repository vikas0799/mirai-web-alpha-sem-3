const express=require("express");
const app=express();
const {isAuthenticated}=require("./middleware/auth.middleware");
const {isAuthenticated_mobile}=require("./middleware/mobile.auth.middleware");
const cookieParser=require("cookie-parser");
const dotenv=require("dotenv");
dotenv.config();


app.use(cookieParser("viet456"));

app.get("/",(req,res)=>{
    // res.cookie("username","dipesh0899",{signed:true,maxAge:1000});
    // res.cookie("username","dipesh0899",{signed:true});
    // console.log(req.cookies.username); //normal cookie
     console.log('Signed Cookies: ', req.signedCookies) //signed cookie
    res.send("home route");
})


// app.use(cookieParser());  //normal cookie parsing

// app.get("/",(req,res)=>{
    // console.log("hii");
    //  res.cookie("username","vikas0799",{maxAge:12000});
    // console.log(req.cookies.username);
    // if(req.cookies.username==undefined){
    //     throw new Error("session expired..");
        
    // }
    // else{
    // res.send("home route");

    // }
   
    // res.cookie("username","dipesh99",{maxAge:60*1000});
    // res.cookie("username","dipesh99",{maxAge:60});
    // console.log(req.cookies.username);


// })

app.listen(process.env.PORT,()=>{
    console.log(`server is running at ${process.env.PORT}`);
    
})