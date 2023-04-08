const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

const homePage = require('./routes/index');
const productPage = require('./routes/product');
const rateingPage = require('./routes/rating');

app.use(bodyParser.urlencoded({extended:false}));
app.use(productPage);
app.use(rateingPage);
app.use(homePage);

app.listen(port)