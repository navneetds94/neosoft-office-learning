const Product = require('../model/product');

// get homepage
exports.getHomePage = (req,res)=>{
    res.render('frontend/index',{
        pageTitle:"Home",
        path:'/',
        ddPath:false
    });
}

// get cart page
exports.getShopingCart = (req,res)=>{
    res.render('frontend/cart',{
        pageTitle:"My Cart",
        path:'/cart',
        ddPath:false
    })
}

// post shopping cart
exports.postShoppingCart = (req,res)=>{
    const prodId = req.body.productId;
    console.log(prodId);
    res.redirect('/cart')
}

// get product list page
exports.getProducts = (req,res)=>{
    Product.productFetch(products => {
        res.render('frontend/products',{
            prods: products,
            pageTitle:"Products",
            path:'/shop',
            ddPath:false
        })
    })
}

// get product-detail
exports.getProductDetail = (req,res)=>{
    const prodId = req.params.productId;
    Product.findById(prodId,product=>{
        res.render('frontend/product-detail',{
            prod:product,
            pageTitle:"Product Detail",
            path:'/shop',
            ddPath:false
        })
    })
}

// get checkout page
exports.getCheckout = (req,res)=>{
    res.render('frontend/checkout',{
        pageTitle:"Checkout",
        path:'/shop',
        ddPath:false
    })
}

// get orders page
exports.getOrders = (req,res)=>{
    res.render('frontend/orders',{
        pageTitle:"My Orders",
        path:'/my-account',
        ddPath:'/my-orders'
    })
}

// get order confirm page
exports.getOrderConfirm = (req,res)=>{
    res.render('frontend/order-confirmation',{
        pageTitle:"Order Confirm",
        path:'/shop',
        ddPath:false
    })
}

// get order tracking page
exports.getOrderTracking = (req,res)=>{
    res.render('frontend/tracking',{
        pageTitle:"Order Track",
        path:'/my-account',
        ddPath:'/order-tracking'
    })
}

// get contact page
exports.getContactPage = (req,res)=>{
    res.render('frontend/contact',{
        pageTitle:"Contact",
        path:'/contact',
        ddPath:false
    })
}

// get login page
exports.getLoginPage = (req,res)=>{
    res.render('frontend/login',{
        pageTitle:"Login",
        path:'/login',
        ddPath:false
    })
}

// get blogs list page
exports.getBlogsPage = (req,res)=>{
    res.render('frontend/blogs',{
        pageTitle:"Blogs",
        path:'/blog',
        ddPath:false
    })
}

// get blog detail page
exports.getBlogDetailPage = (req,res)=>{
    res.render('frontend/blog-detail',{
        pageTitle:"Blog Detail",
        path:'/blog',
        ddPath:false
    })
}