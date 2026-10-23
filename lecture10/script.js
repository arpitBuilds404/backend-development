const express=require("express");
const studentController=require("../data/studentController")
const students = require("")
const app=express();
const PORT=3000

app.use(express.json()); //it handles the json data coming from the client//encode


///Read Operation
app.get("/students",studentController.getStudents
)

//Read operation with id
app.get("/students/:rollNo",studentController.get)


//Create
app.post("/students",(req,res)=>{
    const data=req.body;
    students.push({rollNo:students.length+1,...data});
    res.json({success:true, message:"student created successfully",data});
})

////update
app.put("/students/:rollNo",(req,res)=>{
    const id=req.params.rollNo;
    const data=req.body;
    const student=students.find((student)=>student.rollNo===Number(id));
    if(!student){
        res.status(404).json({success:false, message:"student not found"});
    }
    student.name=data.name??student.name;
    student.section=data.section??student.section;
    res.json({success:true,student});
})

//delete

app.delete("/students/:rollNo",(req,res)=>{
    const id=req.params.rollNo;
    const student=students.find((student)=>student.rollNo===Number(id));
    if(!student){
        res.status(404).json({success:false, message:"student not found"});
    }
    students.splice(students.indexOf(student),1);
    res.json({success:true, message:"student deleted successfully"});
})

app.listen(PORT,()=>console.log("server is running on port 3000"));

