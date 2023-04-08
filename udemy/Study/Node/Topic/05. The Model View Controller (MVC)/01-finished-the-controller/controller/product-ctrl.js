const products = []

// product list
exports.getProduct = (req,res)=>{
    console.log(products)
    res.render('shop',{
        prods: products,
        pageTitle:"Product",
        path:"/products"
    })
}

// add product
exports.addProduct = (req,res)=>{
    const data = req.body;
    products.push(data)
    res.redirect('/products');
}