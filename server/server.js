const express =require("express")
const app=express();
const PORT =3000;

app.get("/",(req,res)=>{
    console.log(req.url);
    console.log("hello word") 
});
app.listen(PORT,()=>console.log("server is running"));