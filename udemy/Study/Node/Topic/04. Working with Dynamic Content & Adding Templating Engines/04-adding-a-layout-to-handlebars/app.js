const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

app.engine(
    'hbs',
    expressHbs.engine({
      layoutsDir: 'views/layouts/',
      defaultLayout: 'main-layout',
      extname: 'hbs'
    })
  );
  app.set('view engine', 'hbs');
  app.set('views', 'views');


app.use(express.static(path.join(__dirname,"public")))

const homePage = require('./routes/index');
const productPage = require('./routes/product');
const addproductPage = require('./routes/add-product');

app.use(bodyParser.urlencoded({extended:false}));
app.use(productPage);
app.use(addproductPage.html);
app.use(homePage);
app.use((req,res)=>{
    res.status(404).sendFile(path.join(__dirname,"views","page404.html"));
})

app.listen(port)