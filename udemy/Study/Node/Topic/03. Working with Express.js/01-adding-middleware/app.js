const express = require('express');
const app = express();
const port = 3000


app.use('/about',(req,res)=>{
    res.send("This is a about page");
})

app.use('/',(req,res,next) => {
    console.log("Home Page");
    res.send("This is a Home Page");
})


app.listen(port)