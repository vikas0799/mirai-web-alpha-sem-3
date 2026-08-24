const express=require("express");
const fs=require("fs");
const path=require("path");
const cors=require("cors");
const app=express();
const port=3000;
const data=require("./MOCK_DATA.json");
// console.log(data);
app.use(cors())
app.set("view engine", "ejs");

app.get("/",(req,res)=>{
    res.send("home route..")
});


app.get("/getdata",(req,res)=>{
    //  const data= fs.readFileSync("MOCK_DATA.json","utf-8");
    //  console.log(data);
    //  res.send("data sent..");
    res.send(data);
    // res.render("index",{data});
    // res.send(MOCK_DATA.json);
    // res.json(data);
})

app.listen(port,()=>{
    console.log(`server is running at ${port}`);
})

