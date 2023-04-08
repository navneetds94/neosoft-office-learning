module.exports.get404 = (req,res) => {
    res.status(404).render('common/page404.ejs',{
        title: 'Page Not Found'
    })
}