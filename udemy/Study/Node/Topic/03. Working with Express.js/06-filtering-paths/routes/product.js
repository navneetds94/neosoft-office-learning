const express = require('express');
const router = express.Router();

router.get('/product',(req,res)=>{
    // console.log('Product Page');
    res.send("<h1>This is a product page</h1>")
})

router.get('/add-product',(req,res)=>{
    res.send(`
        <h1>Add Product</h1>
        <form action="/submit-product" method="POST">
            <div class="form-group">
                <label for="prodName">Name</label><br />
                <input type="text" name="name" class="form-control" id="prodName" required />
            </div><br />
            <div class="form-group">
                <label for="prodCategory">Category</label><br />
                <input type="text" name="category" id="prodCategory" required />
            </div><br />
            <div class="form-group">
                <label for="prodDescription">Description</label><br />
                <textarea name="desciption" id="prodDescription" required></textarea><br />
            </div><br />
            <div class="form-group">
                <label for="prodPrice">Price</label><br />
                <input type="number" name="price" id="prodPrice" required style="width: 180px" />
            </div><br />
            <button type="submit">Send</submit>
        </form>
    `)
})

router.post('/submit-product',(req,res)=>{
    console.log(req.body);
    res.redirect('/add-product')
})

module.exports = router;