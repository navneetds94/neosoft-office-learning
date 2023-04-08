const path = require("path");
const express = require('express');
const router = express.Router();

router.get('/products',(req,res)=>{
    // console.log('Product Page');
    // res.send("<h1>This is a product list page</h1>")
    res.sendFile(path.join(__dirname,"../","views","products.html"));
})

router.get('/add-product',(req,res)=>{
    res.sendFile(path.join(__dirname,"../","views","add-product.html"));
})

router.post('/submit-product',(req,res)=>{
    console.log(req.body);
    res.redirect('/add-product')
})

module.exports = router;