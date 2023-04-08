const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

const homePage = require('./routes/index');
const productPage = require('./routes/product');
const rateingPage = require('./routes/rating');

app.use(bodyParser.urlencoded({extended:false}));
app.use(productPage);
app.use('/add-testimonial',rateingPage);
app.use(homePage);

app.use((req,res)=>{
    const page404 = `
        <h1>Page Not Found</h1>
        <a href="/">Back to Home Page</a>
    `
    res.status(404).send(page404)
})

app.listen(port)