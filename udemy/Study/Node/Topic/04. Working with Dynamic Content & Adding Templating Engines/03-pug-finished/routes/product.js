const path = require("path");
const express = require('express');
const router = express.Router();
const productData = require('./add-product');

router.get('/products',(req,res)=>{
    const product = productData.prodList
    res.render("products",{prod:product,pageTitle:"Products Page",path:"/products"})
    console.log(product);
})

module.exports = router;
