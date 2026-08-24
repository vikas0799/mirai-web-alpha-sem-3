const isAuthenticated_mobile=(req,res,next)=>{
    console.log("mobile no auth middleware..");
   //mobile auth logic
    next();
}


module.exports={isAuthenticated_mobile};