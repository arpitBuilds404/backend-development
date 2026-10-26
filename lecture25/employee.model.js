const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  contact: {
    type: Number,
    required: true
  },
  department: {
    type: String,
    required: true
  }
});

module.exports=mongoose.model("employee",employeeSchema)