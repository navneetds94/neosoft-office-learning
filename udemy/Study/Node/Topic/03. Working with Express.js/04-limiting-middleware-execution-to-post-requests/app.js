const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product',(req,res)=>{
    const addproductPage = `
        <h1>Add Product</h1>
        <form action="/submit-product" method="POST">
            <input type="text" placeholder="Type message" name="message" />
            <button type="submit">Send</button>
        </form>
    `;
    res.send(addproductPage)
})
app.post('/submit-product',(req,res)=>{
    const data = req.body
    const message = data.message
    console.log("Message is :- "+message);
    fs.writeFile("message.txt",message, err => {
        console.log("Form Submited Successfully!!!");
        res.redirect('/');
    })
})

app.use('/',(req,res) => {
    res.send("<h1>This is a home page</h1>");
})

app.listen(port);