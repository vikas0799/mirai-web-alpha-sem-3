const express=require("express");
const app=express();
const {isAuthenticated}=require("./middleware/auth.middleware");
const {isAuthenticated_mobile}=require("./middleware/mobile.auth.middleware");
const cookieParser=require("cookie-parser");

const port= 3000;


// app.use("/dipesh",(req,res,next)=>{
    
//     console.log("middleware X");
//     //condition...
//     next();

// })
app.use(cookieParser());
app.get("/",isAuthenticated,(req,res)=>{
    console.log("flipcart home route,,");
    console.log(req.cookies)
    console.log(req.cookies.count);
    res.send("home route..")
});

// app.use((req,res,next)=>{
    
//     console.log("middleware -1");
//     //condition...
//     next();

// })

// const isAuthenticated=(req,res,next)=>{
//     console.log("two step verification ");
//     //condition
//     console.log("middleware -2");
//     next();
// }

// app.get("/dashboard",isAuthenticated,(req,res)=>{
//     console.log("dashboard protected route");
//     res.send("dashboard");
// })

// app.get("/payment",isAuthenticated,isAuthenticated_mobile,(req,res)=>{
//     console.log("payment protected route");
//     res.send("payment");
// })


app.listen(port,()=>{
    console.log(`server is running at ${port}`);
    
})