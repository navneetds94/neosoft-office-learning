const express = require('express');
const app = express();
port = 3000;

app.use('/',(req,res,next) => {
    console.log('This always runs');
    next();
});

app.use('/add-product', (req,res) => {
    console.log('In other middleware of product');
    res.send("<h1>This is a product page</h1>");
})

app.use('/',(req,res) => {
    console.log('In other middleware of home');
    res.send('<h1>This is a home page');
})

app.listen(port)