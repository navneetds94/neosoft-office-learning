const User = require('../models/Users.mdl')
const nodemailer = require('nodemailer');
const { Op } = require("sequelize");
const sequelize = require('../util/database');
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

// Home Page
module.exports.getHome = (req, res) => {
    // console.log(req.session.isLogin)
    // console.log(req.session.userId)
    res.render('frontend/page-list/index', {
        title: 'Home',
        isAuthenticated: req.session.isLogin
    });
}

// Login Page
module.exports.getLogin = (req, res) => {
    res.render('frontend/page-list/login', {
        title: 'Sign In',
        isAuthenticated: req.session.isLogin
    });
}

module.exports.postLogin = (req, res) => {
    const creds = req.body
    const usrid = creds.username;
    const pwd = creds.password;
    console.log(creds);
    User.findAll({
        // where: [{username: usrid} , {email: usrid}]})
        where: [
            {
                [Op.or]:[
                    { username: usrid }, // department = 'HR'
                    { email: usrid }, // salary > 50000
                ]
            },
            {password: pwd}
        ]
    })
        .then(results => {
            if (results.length > 0){
                // console.log(results);
                // console.log(results[0].id);
                req.session.isLogin = true;
                req.session.userId = results[0].id;
                res.redirect('/')
            }
            else{
                console.log("User Name or Password dosen't matched");
                res.redirect('/login');
            }
        })
        .catch(e => console.log(e));
    //res.redirect('/login');
}

module.exports.postLogout = (req,res) => {
    req.session.destroy((err) => {
        console.log(err);
        res.redirect('/');
    })
}


// Register Page
module.exports.getRegister = (req, res) => {
    res.render('frontend/page-list/register', {
        title: 'Sign Up',
        isAuthenticated: req.session.isLogin
    });
}

module.exports.postRegister = (req, res) => {
    const username = req.body.username;
    const name = req.body.name;
    const email = req.body.email;
    const pwd = req.body.pwd;

    let otp_str = String(Math.floor(1000 + Math.random() * 9000));
    console.log(otp_str);
    let otp_chars = otp_str.split('');

    const otpVerification_html = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Bloggy OTP Verification</title>
    </head>
    
    <body style="margin: 0;font-family: 'system-ui', sans-serif , arial;">
        <table cellspacing="0" cellpading="0" width="700px" style="max-width: 100%;margin: 30px auto;border: 1px solid #ccc;">
            <!-- upper border -->
            <tr>
                <td>
                    <table width="100%" cellspacing="0" cellpading="0">
                        <tr>
                            <td style="width: 100%;height: 3px;background: linear-gradient(to right, #0267C1, #D65108);"></td>
                        </tr>
                    </table>
                </td>
            </tr>
            <!-- User Info -->
            <tr>
                <td>
                    <table width="100%" cellspacing="0" cellpading="0" style="box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.05);border-radius: 0 0 50% 50%/1%;">
                        <tr>
                            <td style="text-align: center;padding-top: 40px;padding-bottom: 30px;">
                                <span style="display: block;color: #0267C1;font-weight: 600;">Hello, John Doe</span>
                                <h1 style="font-size: 20px;font-weight: 600;color: #333;margin-top: 1px;">Thank you for Showing Interest in Bloggy</h1>
                                <p style="font-size: 15px;margin-bottom:5px">We have sended you an OTP for verification</p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td>
                    <table width="100%" cellspacing="0" cellpading="0">
                        <tr>
                            <td style="width: 8%"></td>
                            <td style="width: 84%;padding: 50px 0px 20px;color: slategrey;text-align: center;">
                                <input type="text" value="${otp_chars[0]}" style="width: 32px;height: 32px;text-align: center;font-size: 20px;border: 1px solid #0267C1;border-radius: 4px;background: #fff;color: #0267C1;" readonly disabled />
                                <input type="text" value="${otp_chars[1]}" style="width: 32px;height: 32px;text-align: center;font-size: 20px;border: 1px solid #0267C1;border-radius: 4px;background: #fff;color: #0267C1;" readonly disabled />
                                <input type="text" value="${otp_chars[2]}" style="width: 32px;height: 32px;text-align: center;font-size: 20px;border: 1px solid #0267C1;border-radius: 4px;background: #fff;color: #0267C1;" readonly disabled />
                                <input type="text" value="${otp_chars[3]}" style="width: 32px;height: 32px;text-align: center;font-size: 20px;border: 1px solid #0267C1;border-radius: 4px;background: #fff;color: #0267C1;" readonly disabled />
                            </td>
                            <td style="width: 8%"></td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td style="text-align: center;color: slategrey;font-size: 14px;padding-bottom: 40px;">
                    Bloggy © 2023
                    <br />
                    Tel: 00 1 460 5416
                    <br />
                    Somewhere in earth
                </td>
            </tr>
        </table>
    </body>
    
    </html>`

    let otpVerification = {
        from: 'navneetaneja.ds@gmail.com',
        to: email,
        subject: 'Welcome To Bloggy',
        text: 'Thanks for your interest in Bloggy',
        html: otpVerification_html
    };

    transporter.sendMail(otpVerification, (err, info) => {
        if (err) {
            console.log(err)
        }
        else {
            req.session.isOtp = true;
            req.session.otpSend = otp_str;
            req.session.sendUserName = username;
            req.session.sendEmail = email;
            req.session.sendName = name;
            req.session.sendPwd = pwd;
            console.log("Email sent:" + info.response);
        }
    })
}

module.exports.getRegisterSuccessful = (req, res) => {
    const username = req.query.username
    //console.log(username)
    User.findAll({ where: { username: username } })
        .then(result => {
            res.render('frontend/page-list/register-succesful', {
                title: 'Register Successfully',
                user: result,
                isAuthenticated: req.session.isLogin
            })
        })
        .catch(err => { console.log(err) })

}

// Write Post Page
module.exports.getWritePost= (req,res) => {
    res.render('frontend/page-list/write-post', {
        title: 'Write Post',
        isAuthenticated: req.session.isLogin
    })
}