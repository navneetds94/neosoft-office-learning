const path = require('path');
const express = require('express');
const app = express();
const baseURL = require('./utills/path')
const bodyParser = require('body-parser');

app.use(express.static(path.join(baseURL,'public')));
app.use(bodyParser.urlencoded({extended: false}));


app.set('view engine','ejs');
app.set('views','views');

const admin_get = require('./routes/admin.get');
const admin_post = require('./routes/admin.post');
const front_get = require('./routes/front.get');

app.use('/admin',admin_get);
app.use('/admin',admin_post);
app.use(front_get);

app.listen(3000)