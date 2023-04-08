const path = require("path");
const express = require('express');
const router = express.Router();
const rateData = require('./add-rating');

router.get('/rateing',(req,res)=>{
    const rateings = rateData.rates;
    console.log(rateings)
    res.render("rateing",{rates:rateings,pageTitle:"Rateing Page",path:"/rateing"})
})

module.exports = router;
