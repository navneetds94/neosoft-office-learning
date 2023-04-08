const Product = require('../models/product-mdl');

// product list
exports.getProduct = (req,res)=>{
    const productList = Product.fetchAll()
    res.render('shop',{
        prods: productList,
        pageTitle:"Product",
        path:"/products"
    })
}

// add product
exports.addProduct = (req,res)=>{
    const data = req.body;
    const products = new Product(data.name,data.category,data.image,data.price,data.desc)
    products.save();
    res.redirect('/products');
}