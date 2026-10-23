const express = require("express")
import morgan from "morgan"

// const studentRoutes=require("./studenetRonodeutes")
const app=express();
const PORT =3000;


const logMiddleware=(req,res,next)=>{
    req.data="this is data from middleware"
    console.log("request url:",req.url,"Method:",res.method,);
next()
}
const apiMiddleware=(req,res,next)=>{
    const API_KEY =req.query.API_KEY;
if (API_KEY!="1234"){
    res.send("api key is not found")
    console.log("authenthicated")
    next();

}}
app.use(logMiddleware); //global middle ware
app.use(apiMiddleware)

app.get("/",(req,res)=>{
    console.log("homepage")
    res.send("hellow word")
})

// app.get("/wether")
app.get("/weather-data/",(req,res)=>{
    console.log("Weather data");
    res.json({
        city:"Delhi",
        weather:"sunny",
        temp:32
    })
    
})
//  app.use(express.json())
//  app.use("/",studentRoutes);
 app.listen(PORT,()=>console.log("server is running on port 3000"));
