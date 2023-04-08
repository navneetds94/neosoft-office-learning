const express = require('express')
const routes = express.Router()

var nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: "gmail",
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'navneettaneja.ds@gmail.com',
      pass: 'cidcmshxirdqdbyq'
    }
  });
  

  

routes.get('/',(req,res)=> {
    res.render('index')
})

routes.post('/send',(req,res)=> {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.pwd;
    console.log(email);

    let mailOptions = {
        from: 'navneettaneja.ds@gmail.com',
        to: email,
        subject: 'Test email',
        text: 'This is a test email sent using nodemailer',
        html:  `<h1>Welcome for your registeration</h1>
                <p>Your name is ${name}</p>
                <p>Your email is ${email}</p>
                <p>Your password is ${password}</p>
                `
      };

      transporter.sendMail(mailOptions , (err,info) => {
        if(err){
            console.log(err)
        }
        else{
            console.log("Email sent:"+ info.response)
        }
      })
    res.redirect('/')
})

module.exports = routes;