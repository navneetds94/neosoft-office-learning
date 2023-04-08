const path = require('path');
const express = require('express');
const app = express();
const errorControler = require('./controller/error-ctrl')
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname,"public")));
app.use(bodyParser.urlencoded({extended:false}));

app.set("view engine","ejs")
app.set("views","views")

const homePage = require('./routes/index');
const productPage = require('./routes/product');


app.use(productPage);
app.use(homePage);
app.use(errorControler.page404)

app.listen(3000);