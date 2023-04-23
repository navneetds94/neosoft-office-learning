exports.getLogin = (req,res, next) => {
    console.log(req.session.isLoggedIn);
    res.render('user/login', {
        path: '/login',
        pageTitle: 'Login',
        isAuthenticated: req.session.isLoggedIn
    })
}

exports.postLogin = (req,res,next) => {
    const cred = req.body;
    expiry = 10 * 1000
    // res.setHeader('Set-Cookie', `loggedIn=true; Max-Age=${expiry}`);
    // res.setHeader('Set-Cookie','loggedIn=true;');

    req.session.isLoggedIn = true;
    res.redirect('/');
}