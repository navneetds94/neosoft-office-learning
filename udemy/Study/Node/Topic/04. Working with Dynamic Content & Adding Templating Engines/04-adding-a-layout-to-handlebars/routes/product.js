const path = require("path");
const express = require('express');
const router = express.Router();
const productData = require('./add-product');

router.get('/products',(req,res)=>{
    const products = productData.prodList;
    console.log(products);
    res.render('products',
    {
        prods: products,
        pageTtitle:"Home",
        path:"/products",
        activeProduct: true,
        productCss: true,
        hasProducts: products.length > 0
    })
})

module.exports = router;
