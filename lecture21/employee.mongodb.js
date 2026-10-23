use("googledb");
// db.employee.insert(
//     {
// empID:101,
// Name:"rajesh",
// salary:500000,
// department:"finance",
// contact:12345678,
// age:23
//     }
// )

// db.employee.insertOne(
//     {
// empID:103,
// Name:"ritu",
// salary:500000,
// department:"finance",
// contact:12345678,
// age:20

//     }
// )

// db.employee.insertMany(
//     [
//         {
//              empID:102,
// Name:"raj",
// salary:500000,
// department:"it",
// contact:12345678,
// age:23
//         },
//     {
//          empID:105,
// Name:"aajesh",
// salary:500000,
// department:"hr",
// contact:12345678,
// age:23
//     }
//     ]
// )

/////read operations 1.find()   2 findone()
// db.employee.find()
// db.employee.findOne()

// db.employee.find({department:"it"})

// uodate operation 1. updateOne 2. updateMany

// db.employee.updateOne(
//   {
//     department:"it"
//   },
//   {
//     $set: {
//       age: 23,
//       salary: 900000,
//     }
//   } );

// db.employee.find({department:"it"})


//delete operation 1.deleteOne() 2.deleteMany()

// db.employee.deleteOne({_id:ObjectId('6ad9c1dab1f3d0e5bb15e7b4')})
// db.employee.deleteMany({department:"finance"})


// db.employee.find(
//     {
//         age:{
//             $gte:25
//         }
//     }
// )

///OR

db.employee.find(
    {
        $or:[
            {department:"it"},
            {age:{$gt:28}}
        ]
    }
)