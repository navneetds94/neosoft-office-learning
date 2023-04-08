// modals
const Product = require('../model/product');

// get dashboard page
exports.getDashboard = (req,res)=>{
    res.render('admin/dashboard',{
        pageTitle:"Dashboard",
        path:"/admin/dashboard"
    })
}

// get product page
exports.getProducts = (req,res)=>{
    Product.productFetch((products)=>{
        res.render('admin/product',{
            prods: products,
            pageTitle:"Products",
            path:"/admin/products"
        })
    })
    
}

exports.addProduct = (req,res)=>{
    const data = req.body;
    const products = new Product(data.title,data.cat,data.price,data.image,data.desc);
    products.save()
    res.redirect('/admin/products')
}