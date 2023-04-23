exports.getLogin = (req,res, next) => {
    res.render('user/login', {
        path: '/login',
        pageTitle: 'Login',
        isAuthenticated: req.isLoggedIn
    })
}

exports.postLogin = (req,res,next) => {
    const cred = req.body;
    expiry = 10 * 1000
    res.setHeader('Set-Cookie', `loggedIn=true; Max-Age=${expiry}`);
    // res.setHeader('Set-Cookie','loggedIn=true;');
    isLoggedIn = true
    res.redirect('/');
}