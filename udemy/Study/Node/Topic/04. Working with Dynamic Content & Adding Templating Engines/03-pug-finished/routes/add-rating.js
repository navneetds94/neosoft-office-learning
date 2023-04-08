const path = require("path")
const express = require('express');
const router = express.Router();
const rateList = [];

router.get('/add-rateing',(req,res)=>{
    // res.sendFile(path.join(__dirname,"../","views","add-rateing.html"));
    res.render("add-rateing",{pageTitle:"Add Rateing",path:"/add-rateing"});
})

router.post('/submit-rateing',(req,res)=>{
    const rate = req.body;
    rateList.push(rate);
    res.redirect('/rateing');
    // console.log(rate);
})

module.exports.html = router;
module.exports.rates = rateList;