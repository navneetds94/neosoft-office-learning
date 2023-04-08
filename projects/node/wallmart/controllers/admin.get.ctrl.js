exports.getLogin = (req,res) => {
    res.render('admin/login', {
        title:"Admin Login",
        path:"/admin/login"
    })
}

exports.getDashboard = (req,res) => {
    res.render('admin/dashboard', {
        title:"Dashboard",
        path:"/admin/dashboard"
    })
}

exports.getProducts = (req,res) => {
    res.render('admin/product-list',{
        title: "Products",
        path: '/admin/products'
    })
}