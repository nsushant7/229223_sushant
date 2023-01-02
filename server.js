var express=require ("express");
var app=express();
// var bodyparse=require("body-parser");
// const { urlencoded } = require("body-parser");


app.get("/",(req,res)=>{
    res.send("IN HOME PAGE")
})
app.get("/profile",(req,res)=>{
    res.send("in my profile")
})
app.listen(4000);