const path = require('path');
const express = require('express');
const session = require('express-session');
const app = express()
const PORT = process.env.PORT || 3000
const bodyParser = require('body-parser');
const multer = require('multer');
app.use(bodyParser.urlencoded({extended: false}));

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

app.use(multer({storage: fileStorage, fileFilter: fileFilterCheck}).single('slides'));
app.use(session({secret:'my secret', resave: false , saveUninitialized:false}))
app.use(express.static(path.join(__dirname,'/public')));
app.use("/images", express.static(path.join(__dirname, 'images')));
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