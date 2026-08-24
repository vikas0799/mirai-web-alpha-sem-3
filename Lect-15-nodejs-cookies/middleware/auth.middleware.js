const isAuthenticated=(req,res,next)=>{
    console.log("auth middleware..");
    // res.cookie("username","vikas056");

    // res.cookie("count",5);
   //auth logic


   if(req.cookies.count>=5){
    next();
   }
   else{
    throw new Error("count is less than 5");
    
   }
}


module.exports={isAuthenticated};