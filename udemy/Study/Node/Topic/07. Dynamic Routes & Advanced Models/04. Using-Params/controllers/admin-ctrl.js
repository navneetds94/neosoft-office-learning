const { render } = require('ejs');
const Product = require('../models/product')

exports.getAddProducts = (req,res)=>{
    res.render('admin/edit-product',{
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


exports.getEditProduct = (req,res)=>{
    const editMode = req.query.edit;
    if(!editMode){
        return res.redirect('/');
    }
    res.render('admin/edit-product',{
        pageTitle: "Edit product",
        path: "/admin/edit-product",
        editing: editMode
    })
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