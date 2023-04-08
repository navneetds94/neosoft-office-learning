exports.page404 = (req,res)=>{
    res.status(404).render('page404',{
        pageTitle:"Page Not Found",
        path:"/404"
    })
}