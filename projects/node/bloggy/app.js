const path = require('path');
const express = require('express');
const app = express()
const PORT = process.env.PORT || 3000
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'/public')));
const error_ctrl = require('./ctrls/errors.ctrl')

const sequelize = require('./util/database');

app.set("view engine","ejs");
app.set("views","views");

const admin = require('./routes/admin');
const frontend = require('./routes/frontend');


app.use(frontend);
app.use(error_ctrl.get404)

sequelize.sync().then(results => {
    app.listen(PORT)
}).catch(err => console.log(err))