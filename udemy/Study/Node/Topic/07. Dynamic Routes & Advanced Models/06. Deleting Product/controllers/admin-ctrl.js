const Product = require('../models/product')

exports.getAddProducts = (req,res)=>{
    res.render('admin/edit-product',{
        pageTitle: "Add product",
        path: "/admin/add-product",
        editing:false
    })
}

exports.postAddProduct = (req,res)=>{
    const data = req.body;
    const product = new Product(null,data.title,data.imageUrl,data.price,data.description);
    product.save()
    res.redirect('/admin/products');
}


exports.getEditProduct = (req,res)=>{
    const editMode = req.query.edit;
    const prodId = req.params.productId
    if(!editMode){
        return res.redirect('/');
    }
    //console.log(prodId)
    Product.getSingleProduct(prodId,product => {
        //console.log(product)
        res.render('admin/edit-product',{
            prod: product,
            pageTitle: "Edit product",
            path: "/admin/edit-product",
            editing: editMode
        })
    })
    
}

exports.postEditProduct = (req,res) => {
    const data = req.body;
    console.log(data)
    const prodId = data.id; 
    const updatedTitle = data.title; 
    const updatedImageUrl = data.imageUrl; 
    const updatedPrice = data.price; 
    const updatedDesc = data.description;
    const updatedProductNew = new Product(prodId,updatedTitle,updatedImageUrl,updatedPrice,updatedDesc);
    updatedProductNew.save()
    res.redirect('/admin/products');
}

exports.getProducts = (req,res) => {
    Product.fetchAll((products)=>{
        //console.log(products);
        res.render('admin/admin-products',{
            prods: products,
            pageTitle:'Products',
            path:'/admin/products'
        });
    })
}

exports.postDeleteProduct = (req,res)=>{
    const prodId = req.params.productId;
    Product.deleteById(prodId,product => {
        
    })
    res.redirect('/admin/products');
}