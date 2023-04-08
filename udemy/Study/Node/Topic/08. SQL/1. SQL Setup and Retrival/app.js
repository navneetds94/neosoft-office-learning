const express = require('express');
const app = express();
const db = require('./util/database');

db.execute('select * from superstore')
.then(results =>{console.log(results);})
.catch((err)=>{});

app.use('/',(req,res)=> {
    res.send('<h1>This is a home page</h1>')
})

app.listen(6000);