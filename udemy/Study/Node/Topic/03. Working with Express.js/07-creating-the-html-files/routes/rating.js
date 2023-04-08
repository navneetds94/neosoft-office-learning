const express = require('express');
const router = express.Router();

router.get('/rateing',(req,res)=>{
    res.send(`
        <h1>Add Rateing</h1>
        <form action="/submit-rateing" method="POST">
            <div class="form-group">
                <label for="fullName">Full Name</label><br />
                <input type="email" name="email" class="form-control" id="fullName" required />
            </div><br />
            <div class="form-group">
                <label for="password">Password</label><br />
                <input type="password" name="pwd" id="password" required />
            </div><br />
            <div class="form-group">
                <label for="comment">Comment</label><br />
                <textarea name="cmt" id="comment" required></textarea><br />
            </div><br />
            <div class="form-group">
                <label for="rate">Rate</label><br />
                <input type="number" min="1" max="5" name="rate" id="rate" required />
            </div><br />
            <button type="submit">Send</submit>
        </form>
    `)
})

module.exports = router;