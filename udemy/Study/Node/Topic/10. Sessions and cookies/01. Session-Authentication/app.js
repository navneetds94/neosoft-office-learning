const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const session = require('express-session');

const sequelize = require('./util/database');

const Product = require('./models/product');
const User = require('./models/users');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const AuthRoute = require('./routes/auth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(session({secret:'my secret', resave: false , saveUninitialized:false , cookie: {maxAge: 10 * 1000}}))
app.use(session({secret:'my secret', resave: false , saveUninitialized:false}))



app.use((req,res,next)=>{
    User.findByPk(1)
    .then(user=>{
        req.user = user;
        //console.log(user)
        next();
    })
    .catch(err=> console.log(err))
})
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(AuthRoute);

app.use(errorController.get404);

Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE'});
// User.hasMany(Product);

// sequelize.sync({force: true})
sequelize.sync()
.then(user => {
    // return User.findByPk(1)
    return User.findAll({'where' : {'id':1}})
})
.then(user => {
    if(!user){
        return "User Not Found"
    }
    // return Promise.resolve(user);
    return user;
})
.then(user => {
    //console.log(user);
})
.then(results => {
    app.listen(3000);
}).catch(err=> {console.log(err)})

