const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/arpit',(req,res)=>{
    res.send("here i am ");
});
app.get('/main',(req,res)=>{
    res.send("<h>its main page</h>")
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});