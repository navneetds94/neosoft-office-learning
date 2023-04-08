const Product = require('../models/product')

exports.getAddProducts = (req,res)=>{
    res.render('admin/add-product',{
        pageTitle: "Add product",
        path: "/admin/add-product"
    })
}

exports.postAddProduct = (req,res)=>{
    const data = req.body;
    const product = new Product(data.title,data.imageUrl,data.price,data.description);
    product.save()
    res.redirect('/shop');
    res.redirect('/admin/add-product');
}

exports.getEditProduct = (req,res)=> {
    res.render('admin/edit-product',{
        pageTitle: "Edit product",
        path: "/shop"
    });
}