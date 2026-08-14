const express= require("express");
const app=express();

const port=3000;

app.use((req,res,next)=>{
    console.log(":auth middleware");
    next();
});
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    // console.log(req.headers);
    // console.log(req.body);
    // console.log(req.ip);
    // console.log(req.hostname)
    // console.log(res);
    // console.log(req.body);
    // console.log(req.url);
    // console.log(req.params);
    // console.log(req.query);
    res.send("data bhej rha hu ..");
})

app.get("/user/:id", (req, res) => {
    console.log(req.params);
    res.send("user page");
});

app.listen(port,()=>{
    console.log(`server is running at ${port} `)
})
