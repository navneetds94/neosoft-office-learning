const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');

const Product = require('./models/product');
const User = require('./models/users');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


const fileStorage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,'images')
    },
    filename: (req,file,cb) => {
        const today = new Date();
        const current_time = `${today.getDate()}.${today.getMonth()}.${today.getFullYear()}.${today.getHours()}.${today.getMinutes()}.${today.getSeconds()}`;
        //console.log(current_time);
        cb(null, current_time + '-' + file.originalname);
    }
});

const fileFilterCheck = (req,file,cb) => {
    if(file.mimetype === "image/png" || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg'){
        cb(null,true);
    }
    else{
        cb(null,false);
    }
}

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(multer({dest: 'images'}).single('image'));
app.use(multer({storage: fileStorage, fileFilter: fileFilterCheck}).single('image'));
app.use(express.static(path.join(__dirname, 'public')));
app.use("/images", express.static(path.join(__dirname, 'images')));



app.use((req,res,next)=>{
    User.findByPk(1)
    .then(user=>{
        req.user = user;
        console.log(user)
        next();
    })
    .catch(err=> console.log(err))
})
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE'});
// User.hasMany(Product);

// sequelize.sync({force: true})
sequelize.sync()
.then(user => {
    return User.findByPk(1)
})
.then(user => {
    if(!user){
        return User.create(
            {name: 'Navneet', email:"navneet@gmail.com"}
        )
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

