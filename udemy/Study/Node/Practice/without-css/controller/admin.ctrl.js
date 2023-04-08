const Products = require('../models/products');

module.exports.getAdmin = (req,res)=>{
    res.render('pages/admin/admin',{
        title:'Admin',
        path:'/admin'
    })
}

module.exports.getAddProduct = (req,res)=>{
    res.render('pages/admin/add-product',{
        title:'Add Product',
        path:'/admin/add-product',
        editing:false
    })
}

module.exports.postSubmitProduct = (req,res)=> {
    const data = req.body;
    const product = new Products(0,data.name,data.image,data.price,data.description);
    product.save()
    res.redirect('/admin/admin-products')
}

module.exports.getEditProduct = (req,res)=>{
    const editMode = req.query.edit;
    console.log(editMode);
    const prodId = req.params.productId;
    if(!editMode){
        return res.redirect('/admin');
    }

    //console.log(prodId)
    Products.getSingleProduct(prodId,product => {
        //console.log(product)
        res.render('pages/admin/add-product',{
            prod: product,
            title:'Add Product',
            path:'/admin/add-product',
            editing: editMode
        })
    })
}


module.exports.postEditProduct = (req,res)=> {
    const data = req.body;
    const prodId = data.id; 
    const updatedTitle = data.name; 
    const updatedImageUrl = data.image; 
    const updatedPrice = data.price; 
    const updatedDesc = data.description;
    const updatedProductNew = new Products(prodId,updatedTitle,updatedImageUrl,updatedPrice,updatedDesc);
    updatedProductNew.save()
    res.redirect('/admin/admin-products')
}

module.exports.getAdminProducts = (req,res)=>{
    Products.fetchAll(products => {
        res.render('pages/admin/admin-products',{
            prods: products,
            title:'Product',
            path:'/admin/admin-products'
        })
    });
}

module.exports.getAdminProductDetail = (req,res)=>{
    const prodId = req.params.productId;
    Products.getSingleProduct(prodId,product => {
    //console.log(product)
    res.render('pages/admin/product-detail',{
        prod: product,
        title:'Product',
        path:'/admin/admin-products'
    })
})}