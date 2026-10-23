const student =require("./data/studentData")
const getStudents=(req,res)=>{
    res.jason(students)
}

const getStudentById=(req,res)=>{
    const id=req.params.rollNo;
    const student=students.find((student)=>student.rollNo===Number(id));
    if(!student){
        res.status(404).json({success:false, message:"student not found"});
    }
    res.json({success:true,student});
}

const AddStudent=(req,res)=>{
    const data=req.body;
    students.push({rollNo:students.length+1,...data});
    res.json({success:true, message:"student created successfully",data});
}
const updatestudent=(req,res)=>{
    const id=req.params.rollNo;
    const data=req.body;
    const student=students.find((student)=>student.rollNo===Number(id));
    if(!student){
        res.status(404).json({success:false, message:"student not found"});
    }
    student.name=data.name??student.name;
    student.section=data.section??student.section;
    res.json({success:true,student});
}
const deleteStudent =(req,res)=>{
    const id=req.params.rollNo;
    const student=students.find((student)=>student.rollNo===Number(id));
    if(!student){
        res.status(404).json({success:false, message:"student not found"});
    }
    students.splice(students.indexOf(student),1);
    res.json({success:true, message:"student deleted successfully"});
}

module.export={
    getStudents,
    getStudentById,
    AddStudent,
    updatestudent,deleteStudent
}