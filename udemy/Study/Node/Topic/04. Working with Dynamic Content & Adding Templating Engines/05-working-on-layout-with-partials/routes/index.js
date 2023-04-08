const express = require('express');
const routes = express.Router();

routes.get('/',(req,res)=>{
    res.render('index',{
        pageTitle:"Home",
        path:"/"
    })
})


module.exports = routes