const express = require("express")
const router = express.Router();

const studentController = require("../controller/studentController");

///Read Operation
app.get("/students",studentController.getStudents)

//Read operation with id
app.get("/students/:rollNo",studentController.getStudentById)


//Create
app.post("/students",studentController.addStudent)

////update
app.put("/students/:rollNo",studentController.updateStudent)

//delete

app.delete("/students/:rollNo",studentController.deleteStudent)



app.get("/students",studentController.getStudents)

//Read operation with id
app.get("/students/:rollNo",studentController.getStudentById)


//Create
app.post("/students",studentController.addStudent)

////update
app.put("/students/:rollNo",studentController.updateStudent)

//delete

app.delete("/students/:rollNo",studentController.deleteStudent)

module.exports=router
          