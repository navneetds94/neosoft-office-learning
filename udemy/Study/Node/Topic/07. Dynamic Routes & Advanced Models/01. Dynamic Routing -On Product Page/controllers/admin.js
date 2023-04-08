// modals
const Product = require('../model/product');

// get login section
exports.getLogin = (req,res)=>{
    res.render('admin/login',{
        pageTitle:"Login",
        path:"/admin"
    })
}

// get dashboard section
exports.getDashboard = (req,res)=>{
    res.render('admin/dashboard',{
        pageTitle:"Dashboard",
        path:"/admin/dashboard"
    })
}

// product section
exports.addProduct = (req,res)=>{
    const data = req.body;
    const products = new Product(0,data.title,data.cat,data.price,data.image,data.desc);
    products.save()
    res.redirect('/admin/products')
}

exports.getProducts = (req,res)=>{
    Product.productFetch((products)=>{
        res.render('admin/product',{
            prods: products,
            pageTitle:"Products",
            path:"/admin/products"
        })
    })
    
}

exports.getProductDetail = (req,res)=>{
    const prodId = req.params.productId;
    Product.findById(prodId,products=>{
        res.render('admin/product-detail',{
            prod: products,
            pageTitle:"Product Detail",
            path:"/admin/products"
        })
    })
}

exports.editProduct = (req,res)=>{
    res.render('admin/edit-product',{
        pageTitle:"Edit Product",
        path:"/admin/products"
    })
}

// get blogs
exports.getBlogs = (req,res) => {
    res.render('admin/blogs',{
        pageTitle:"Blogs",
        path:"/admin/blogs"
    })
}

exports.getBlogDetail = (req,res) => {
    res.render('admin/blog-detail',{
        pageTitle:"Blog Detail",
        path:"/admin/blogs"
    })
}