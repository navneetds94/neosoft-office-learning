const path = require("path");
const express = require('express');
const router = express.Router();

const product = [];

router.get('/add-product',(req,res)=>{
    res.render('add-product',
    {
        pageTtitle:"Add Product",
        path:"/add-product",
        activeAddProduct: true
    })
})

router.post('/submit-product',(req,res)=>{
    data = req.body
    product.push(data);
    res.redirect('/products')
    // console.log(product);
})


module.exports.html = router;
module.exports.prodList = product;