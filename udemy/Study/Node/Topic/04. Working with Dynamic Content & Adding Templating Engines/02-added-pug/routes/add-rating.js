const path = require("path")
const express = require('express');
const router = express.Router();

router.get('/add-rateing',(req,res)=>{
    // res.sendFile(path.join(__dirname,"../","views","add-rateing.html"));
    res.render("add-rateing");
})

module.exports = router;