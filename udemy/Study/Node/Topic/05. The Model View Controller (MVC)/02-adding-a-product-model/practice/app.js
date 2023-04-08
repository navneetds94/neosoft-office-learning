const path=require('path');
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const errorController = require('./controllers/erros')

const frontend = require('./routes/frontend-routes');
const adminRoutes = require('./routes/admin-routes');
const otherRoutes = require('./routes/other-routes');

app.use(express.static(path.join(__dirname,"public")));
app.use(bodyParser.urlencoded({extended: false}));

app.set("view engine","ejs");
app.set("views","views")

app.use(frontend);
app.use('/admin',adminRoutes);
app.use(otherRoutes)
app.use(errorController.page404)

app.listen(port);