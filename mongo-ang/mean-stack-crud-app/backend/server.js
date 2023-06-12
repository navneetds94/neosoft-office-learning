const express = require('express');
const app = express();
const bparser = require('body-parser');
const api_route = require('./routes/api')
const error_ctrl = require('./ctrl/error.ctrl');
const db = require('./util/mongo.db');

db
.then((x) => {
  // console.log(x)
  console.log(`Connected to Mongo! Database name: "${x.connections[0].db.databaseName}"`)
})
.catch((err) => {
  console.error('Error connecting to mongo', err.reason)
})

app.use(bparser.json());
app.use(bparser.urlencoded({extended:false}));
app.use('/api', api_route)
app.use(error_ctrl.get404)

app.listen(3000)
