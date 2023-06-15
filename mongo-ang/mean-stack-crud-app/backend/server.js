const express = require('express');
const path = require('path');
const app = express();
const bparser = require('body-parser');
const mongoConnect = require('./util/mongo.db');

const employeeRoute = require('./routes/employee.route');
const error_ctrl = require('./ctrl/error.ctrl');


app.use(bparser.json());
app.use(bparser.urlencoded({extended:false}));
app.use('/api', employeeRoute)
app.use(error_ctrl.get404)

// mongoConnect((client)=>{
//   console.log(client)
// })
app.listen(3000)
