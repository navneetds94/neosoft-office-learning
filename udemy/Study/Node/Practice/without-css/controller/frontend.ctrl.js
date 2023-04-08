module.exports.getHome = (req,res)=>{
    res.render('pages/front/index',{
        title: 'Home',
        path:'/'
    });
}

module.exports.getShop = (req,res)=>{
    res.render('pages/front/shop',{
        title: 'Products',
        path:'/shop'
    });
}

module.exports.getProductDetail = (req,res)=>{
    res.render('pages/front/detail',{
        title: 'Detail',
        path:'/shop'
    });
}

module.exports.getCart = (req,res)=>{
    res.render('pages/front/cart',{
        title: 'Cart',
        path:'/cart'
    });
}