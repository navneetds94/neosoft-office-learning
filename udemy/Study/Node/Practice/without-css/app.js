const path = require('path')
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname,'public')))

app.use(bodyParser.urlencoded({extended:false}));

app.set("view engine","ejs");
app.set("views","views");

const frontend = require('./routes/frontend');
const admin = require('./routes/admin');

app.use('/admin',admin);
app.use(frontend);
app.use((req,res)=>{
    res.status(404).send('Page Not Found');
})

app.listen(PORT,(err)=>{
    console.log(`App is runnning on ${PORT}`)
})