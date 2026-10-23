








// const fs = require("fs");







// Synchronous file read
// console.log("first");
// const data = fs.readFileSync("file.txt", "utf-8"); 
// console.log(data);
// console.log("second");

// Asynchronous file read
// console.log("first");
// fs.readFile("file.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });
// console.log("second");

// const fs = require("fs");

// // Append text to file.txt
// fs.appendFile("file.txt", "\nhello students", (err) => {
//     if (err) {
//         console.error("Error writing to file:", err);
//     }
//     })
    
const fs = require("fs");



// Optional: check if file still exists
// fs.access("file.txt", fs.constants.F_OK, (err) => {
//     if (err) {
//         console.log("Confirmed: file1.txt does not exist.");}
//     })

// const crypto = require("crypto");  
// const password="Jhon@124"

// const hash=crypto.createHash("sha256").update(password).digest("hex");
// console.log(hash)

// const salt=crypto.randomBytes(16).toString("hex");
// console.log(salt)

// const hash=crypto.createHmac("sha256",salt).update(password).digest("hex");
// console.log(hash)



const dns = require("dns");

dns.lookup("www.google.com", (err, address, family) => {
    if (err) {
        console.log(err);
    } else {
        console.log(address);
        console.log(family);
    }
});

dns.reverse("8.8.8.8", (err, hostnames) => {
    if (err) {
        console.log(err);
    } else {
        console.log(hostnames);
    }
});
