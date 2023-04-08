const path = require("path");
const express = require('express');
const router = express.Router();
const productData = require('./add-product');

router.get('/products',(req,res)=>{
    // console.log('Product Page');
    // res.send("<h1>This is a product list page</h1>")
    res.sendFile(path.join(__dirname,"../","views","products.html"));
    console.log(productData.prodList);
})

module.exports = router;
