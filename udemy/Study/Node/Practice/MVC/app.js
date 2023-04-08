const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8000;
const errorController = require('./controllers/error-ctrl');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"public")));


const admin = require('./routes/admin');
const shop = require('./routes/shop');


app.set("view engine", "ejs");
app.set("views","views");

app.use('/admin',admin);
app.use(shop);
app.use(errorController.page404)


app.listen(PORT, (msg)=>{
    msg = `app listen on port number ${PORT}` 
    console.log(msg)
})