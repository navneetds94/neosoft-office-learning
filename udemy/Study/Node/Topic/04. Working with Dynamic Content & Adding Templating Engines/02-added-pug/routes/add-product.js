const path = require("path");
const express = require('express');
const router = express.Router();

const product = [];

router.get('/add-product',(req,res)=>{
    // res.sendFile(path.join(__dirname,"../","views","add-product.html"));
    res.render('add-product.pug');
})

router.post('/submit-product',(req,res)=>{
    data = req.body
    product.push(data);
    res.redirect('/products')
    // console.log(product);
})


module.exports.html = router;
module.exports.prodList = product;