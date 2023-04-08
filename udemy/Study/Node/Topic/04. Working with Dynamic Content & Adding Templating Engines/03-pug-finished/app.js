const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname,"public")))

app.set("view engine","pug");
app.set("views","views");

const homePage = require('./routes/index');
const productPage = require('./routes/product');
const addproductPage = require('./routes/add-product');
const rateingPage = require('./routes/rating');
const addrateingPage = require('./routes/add-rating');

app.use(bodyParser.urlencoded({extended:false}));
app.use(productPage);
app.use(addproductPage.html);
app.use(rateingPage);
app.use(addrateingPage.html);
app.use(homePage);
app.use((req,res)=>{
    // res.status(404).sendFile(path.join(__dirname,"views","page404.html"));
    res.status(404).render("page404")
})

app.listen(port)