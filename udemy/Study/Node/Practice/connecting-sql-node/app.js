const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

const db = require('./util/database');

// db.execute('select * from city')
// .then(results =>{console.log(results);})
// .catch((err)=>{});

app.use('/',(req,res)=>{
    res.send('Home');
})

app.listen(3000)