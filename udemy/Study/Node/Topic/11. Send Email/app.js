const express = require('express');
const app = express();
const port = process.env.port || 3000;
const mail = require('./routes/mail');
const bodyParser = require('body-parser');
app.set("view engine","ejs");
app.set("views","views")
app.use(bodyParser.urlencoded({extended: false}))
app.use(mail)

app.listen(port, () => console.log(`Example app listening on port ${port}!`));