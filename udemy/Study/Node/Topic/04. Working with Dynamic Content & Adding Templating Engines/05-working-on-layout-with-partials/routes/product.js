const express = require('express');
const routes = express.Router();
const products = []

routes.get('/products',(req,res)=>{
    console.log(products)
    res.render('shop',{
        prods: products,
        pageTitle:"Product",
        path:"/products"
    })
})

routes.post('/submit-product',(req,res)=>{
    const data = req.body;
    products.push(data)
    res.redirect('/products');
})


module.exports = routes