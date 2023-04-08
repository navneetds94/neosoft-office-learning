const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getHomePage = exports.getProducts = (req,res)=>{
    res.render('shop/index',{
        pageTitle: "Home",
        path: "/home"
    })
}

exports.getShop = (req, res) => {
    Product.fetchAll(products => {
        res.render('shop/shop', {
            prods: products,
            pageTitle: "Shop",
            path: "/shop"
        })
    })
};

exports.getSingleProduct = (req,res) => {
    prodId = req.params.productId;
    Product.getSingleProduct(prodId,product => {
        // console.log(product)
        res.render('shop/product-detail',{
            prod: product,
            pageTitle:'Product Detail',
            path: "/shop"
        })
    })
}

exports.getCart = (req,res) => {
    res.render('shop/cart',{
        pageTitle:'My Cart',
        path: "/cart"
    });
}

exports.postCart = (req,res) => {
    const data = req.body;
    prodId = data.productId;
    prodPrice = data.productPrice;
    Cart.addProductToCart(prodId,prodPrice)
    res.redirect('/shop')
}