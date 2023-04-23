exports.getLogin = (req,res, next) => {
    res.render('user/login', {
        path: '/login',
        pageTitle: 'Login'
    })
}