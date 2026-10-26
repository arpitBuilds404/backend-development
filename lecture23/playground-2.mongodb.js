// use("googledb");


// db.employee.insertMany([
//     {
//         empID: 101,
//         Name: "Arpit",
//         salary: 600000,
//         department: "IT",
//         contact: 9876543210,
//         age: 20
//     },
//     {
//         empID: 102,
//         Name: "Rahul",
//         salary: 900000,
//         department: "finance",
//         contact: 9876543211,
//         age: 28
//     },
//     {
//         empID: 103,
//         Name: "Aman",
//         salary: 750000,
//         department: "HR",
//         contact: 9876543212,
//         age: 25
//     },
//     {
//         empID: 104,
//         Name: "Priya",
//         salary: 850000,
//         department: "IT",
//         contact: 9876543213,
//         age: 24
//     },
//     {
//         empID: 105,
//         Name: "Suresh",
//         salary: 500000,
//         department: "HR",
//         contact: 9876543214,
//         age: 23
//     },
//     {
//         empID: 106,
//         Name: "Neha",
//         salary: 1000000,
//         department: "finance",
//         contact: 9876543215,
//         age: 29
//     },
//      {
//         empID: 107,
//         Name: "Vikas",
//         salary: 650000,
//         department: "IT",
//         contact: 9876543216,
//         age: 26
//     },
//     {
//         empID: 108,
//         Name: "Anjali",
//         salary: 800000,
//         department: "finance",
//         contact: 9876543217,
//         age: 27
//     }
// ])
// db.employee.aggregate([
//     // 1. Filter finance employees
//     {
//         $match: { department: "finance" }
//     },

//     // 2. Select required fields
//     {
//         $project: {
//             Name: 1,
//             salary: 1,
//             contact: 1,
//             _id: 0
//         }
//     },

//     // 3. Calculate salary statistics
//     {
//         $group: {
//             _id: null,
//             avgSalary: { $avg: "$salary" },
//             maxSalary: { $max: "$salary" },
//             minSalary: { $min: "$salary" },
//             totalSalary: { $sum: "$salary" },
//             totalEmployees: { $sum: 1 }
//         }
//     },
// {

//     $count:"totalSalary"
// }
// ]);


// db.employee.getIndexes()
// db.employee.find({_id:ObjectId('6ad9c1dab1f3d0e5bb15e7b5')})
// db.createIndec({contact:1})
db.employee.find()

// // indexing in mongo db
// for query performance

// // // sharding interview

