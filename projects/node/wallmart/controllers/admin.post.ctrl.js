exports.submitLogin = (req,res) => {
    const data = req.body;
    // console.log(data);
    res.redirect('/admin/dashboard');
}