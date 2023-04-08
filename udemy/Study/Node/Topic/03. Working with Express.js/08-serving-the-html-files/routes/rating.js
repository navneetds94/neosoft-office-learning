const path = require("path")
const express = require('express');
const router = express.Router();

router.get('/rateing',(req,res)=>{
    res.sendFile(path.join(__dirname,"../","views","add-rateing.html"));
})

module.exports = router;