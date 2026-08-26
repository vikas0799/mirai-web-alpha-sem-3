const express=require("express");
const app=express();
const connectDB=require("./config/db.js");
const routes=require("./routes/userRoutes.js");

app.use()
connectDB();
routes.get("/api/user",userRoutes);





module.exports=app;