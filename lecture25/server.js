const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

mongoose
  .connect("mongodb://localhost:27017/googledb")
  .then(() => {
    console.log("DB connected");
  })
  .catch((error) => {
    console.error("DB connection error:", error);
  });
  
app.get("/", (req, res) => {
  res.send("Server is running successfully!");
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});