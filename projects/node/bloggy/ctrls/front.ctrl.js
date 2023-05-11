const User = require('../models/Users.mdl');
const Blog = require('../models/Blogs.mdl');

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
module.exports.getHome = (req, res, next) => {
    console.log(req.session.isLogin)
    // console.log(req.session.userId)
    // console.log(req.session.isOtp)
    
    if (req.session.isLogin){
        Blog.findAll({where:[{"userId":req.session.userId}]}).then(results => {
            console.log(results)
            res.render('frontend/page-list/index', {
                blog_list: results,
                title: 'Home',
                isAuthenticated: req.session.isLogin,
                isOtp : req.session.isOtp,
                otpEmail : req.session.sendEmail,
                otpNotMatched : req.session.otpNotMatched,
                // csrfToken: req.session.csfTokken
            });
        }).catch(err => console.log(err));
    }
    else{
        res.render('frontend/page-list/index', {
            title: 'Home',
            isAuthenticated: req.session.isLogin,
            isOtp : req.session.isOtp,
            otpEmail : req.session.sendEmail,
            otpNotMatched : req.session.otpNotMatched,
            // csrfToken: req.csrfToken()
        });
    }
}

// Login Page
module.exports.getLogin = (req, res, next) => {
    res.render('frontend/page-list/login', {
        title: 'Sign In',
        isAuthenticated: req.session.isLogin
    });
}

module.exports.postLogin = (req, res, next) => {
    const creds = req.body
    const usrid = creds.username;
    const pwd = creds.password;
    // console.log(creds);
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
                // req.session.csfTokken = req.csrfToken()
                // console.log(req.session.csfTokken)
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
module.exports.getRegister = (req, res, next) => {
    res.render('frontend/page-list/register', {
        title: 'Sign Up',
        isAuthenticated: req.session.isLogin
    });
}

module.exports.postRegister = (req, res, next) => {
    const username = req.body.username;
    const name = req.body.name;
    const email = req.body.email;
    const pwd = req.body.pwd;

    let otp_str = String(Math.floor(1000 + Math.random() * 9000));
    // console.log(otp_str);
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
        subject: 'OTP for Verification from Bloggy',
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
            res.redirect('/')
        }
    })
}


module.exports.postVerifyOtp = (req,res) => {
    email_otp = req.session.otpSend
    opt_val = req.body
    otp_val_joined = Object.values(opt_val)
    res_otp = otp_val_joined.join("")
    
    // console.log(`Email otp => ${email_otp}`)
    // console.log(`Response otp => ${res_otp}`)
    let user_name = req.session.sendUserName;
    let user_email = req.session.sendEmail;
    let real_name = req.session.sendName;
    let user_pwd = req.session.sendPwd;

    const mailer_html = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Bloggy</title>
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
                        <td style="text-align: center;padding-top: 40px;">
                            <span style="display: block;color: #0267C1;font-weight: 600;">Hello, ${real_name}</span>
                            <h1 style="font-size: 20px;font-weight: 600;color: #333;margin-top: 1px;">Thank you for Signing Up</h1>
                            <p style="font-size: 14px;margin-bottom:5px">Your Username :- <span style="color: #0267C1;">${user_name}</span></p>
                            <p style="font-size: 14px;margin-top:0">Your Password :- <span style="color: #0267C1;">${user_pwd}</span></p>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: center;padding-top: 20px;padding-bottom: 15px;">
                            <img src="https://i.ibb.co/2g7tS2d/good.png" alt="good" border="0" style="width: 85px;display: block;margin: 0 auto;">
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: center;color: slategrey;font-size: 20px;font-weight: 600;padding-bottom: 20px;">Bloggy is here</td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td>
                <table width="100%" cellspacing="0" cellpading="0">
                    <tr>
                        <td style="width: 8%"></td>
                        <td style="width: 84%;padding: 20px 0px;color: slategrey;">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus esse fugiat, repudiandae alias sequi cupiditate quasi nostrum eveniet, debitis, facere nesciunt quia animi eius nobis quas ipsa odio explicabo quis obcaecati. Voluptatum harum deserunt inventore quos, nihil dicta libero autem maxime dolorum rem dolorem recusandae aspernatur molestias debitis obcaecati minima commodi, veniam facere quia.
                            </p>
                            <p>
                                <span style="color: steelblue;">Hold up, there's more!</span>
                                A 7 days simulation trial, your trial starts now.
                            </p>
                            <p>If you have any questions, kindly reach out to our team on support@placeholder.com</p>
                            <p>Have an AWESOME day! <br>
                                Brought to you by your friends at Placeholder.
                            </p>
                        </td>
                        <td style="width: 8%"></td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td>
                <table width="100%" cellspacing="0" cellpading="0">
                    <tr>
                        <td>
                            <h2 style="text-align: center;margin-top: 0;font-weight: 500;">What we offer</h2>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td>
                <table width="100%" cellspacing="0" cellpading="0" style="table-layout: fixed;">
                    <tr>
                        <td style="width: 10%"></td>
                        <td style="width: 40%;text-align: center;padding: 0 10px;">
                            <span style="display: block;width: 50px;margin: 0 auto;"><img src="https://i.ibb.co/tHZQHTB/desktop.png" alt="desktop" border="0" width="100%" ></span>
                            <strong style="font-size: 16px;">Advance Backend</strong>
                            <p style="font-size: 13px;color: slategrey;">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet sed culpa cupiditate?</p>
                        </td>
                        <td style="width: 40%;text-align: center;padding: 0 10px;">
                            <span style="display: block;width:50px;margin: 0 auto;"><img src="https://i.ibb.co/zSD3NkX/smartphone.png" alt="smartphone" border="0" width="100%"></span>
                            <strong style="font-size: 16px;">Mobile Platform</strong>
                            <p style="font-size: 13px;color: slategrey;">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet sed culpa cupiditate?</p>
                        </td>
                        <td style="width: 5%"></td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td>
                <table width="100%" cellspacing="0" cellpading="0">
                    <tr>
                        <td style="text-align: center;padding-top: 40px; padding-bottom: 40px;">
                            <a href="#" style="padding: 15px 25px;font: inherit;background: linear-gradient(to right, #0267C1, #0280EF);border-radius: 50px;border: 0;color: #fff;display: inline-block;text-decoration: none;">Explore</a>
                        </td>
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
</html>
    `

    

    if(email_otp == res_otp){
        // console.log("Matched")
        User.create({
            username: user_name,
            name: real_name,
            email: user_email,
            password: user_pwd
        }).then(result => {
            //console.log(result);
            // console.log("User Created Successfully");
            
            let mailOptions = {
                from: 'navneetaneja.ds@gmail.com',
                to: user_email,
                subject: 'Welcome To Bloggy',
                text: 'Thanks for your interest in Bloggy',
                html: mailer_html
            };

            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log("Email sent:" + info.response)
                    res.redirect(`/register-successfull?username=${user_name}`);
                }
            })
        })
        .catch(err => console.log(err))
    }
    else{
        console.log("Not Matched");
        req.session.otpNotMatched = true;
        res.redirect('/')
    }
}

module.exports.getRegisterSuccessful = (req, res, next) => {
    const username = req.query.username
    //console.log(username)
    req.session.destroy((err) => {
        console.log(err);
    });
    User.findAll({ where: { username: username } })
        .then(result => {
            res.render('frontend/page-list/register-succesful', {
                title: 'Register Successfully',
                user: result
            })
        })
    //     .catch(err => { console.log(err) })
}

// Write Post Page
module.exports.getWritePost = (req,res) => {
    //console.log(req.session.userId)
    
    res.render('frontend/page-list/write-post', {
        title: 'Write Post',
        isAuthenticated: req.session.isLogin
    })
}

module.exports.postWritePost = (req,res) => {
    const user_id = req.session.userId
    const title = req.body.title;
    const image_file = req.file;
    const content = req.body.content;
    // console.log(image_file)
    console.log(user_id)

    const image = image_file.path;
    if(!image_file){
        return "Other Format";
    }
    else{
        Blog.create({
            userId: user_id,
            title: title,
            slides: image,
            content: content
        }).then(result => {
            console.log('Blog Added Succesfully');
            res.redirect('/');
          }).catch(err=> {console.log(err)})
    }
}

// post detail page
module.exports.getPostDetail = (req,res) => {
    const blogId = req.params.blogId
    Blog.findByPk(blogId).then(result => {
        //console.log(result)
        res.render('frontend/page-list/post-detail',{
            title: 'Post',
            isAuthenticated: req.session.isLogin,
            postData: result
        })
    })
    .catch(err=> {console.log(err)});
}


module.exports.postComment = (req,res) => {
    const blogId = req.params.blogId;
    const comment =req.body.comment;
    console.log(blogId);
    console.log(comment);
}