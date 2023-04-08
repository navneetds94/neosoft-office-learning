const User = require('../models/Users.mdl')
const nodemailer = require('nodemailer');
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
    res.render('frontend/page-list/index', {
        title: 'Home'
    });
}

// Login Page
module.exports.getLogin = (req, res) => {
    res.render('frontend/page-list/login', {
        title: 'Sign In'
    });
}


// Register Page
module.exports.getRegister = (req, res) => {
    res.render('frontend/page-list/register', {
        title: 'Sign Up'
    });
}

module.exports.postRegister = (req, res) => {
    const username = req.body.username;
    const name = req.body.name;
    const email = req.body.email;
    const pwd = req.body.pwd;

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
                            <span style="display: block;color: #0267C1;font-weight: 600;">Hello, ${name}</span>
                            <h1 style="font-size: 20px;font-weight: 600;color: #333;margin-top: 1px;">Thank you for Signing Up</h1>
                            <p style="font-size: 14px;margin-bottom:5px">Your Username :- <span style="color: #0267C1;">${username}</span></p>
                            <p style="font-size: 14px;margin-top:0">Your Password :- <span style="color: #0267C1;">${pwd}</span></p>
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


    let mailOptions = {
        from: 'navneetaneja.ds@gmail.com',
        to: email,
        subject: 'Welcome To Bloggy',
        text: 'This is a test email sent using nodemailer',
        html: mailer_html
    };

    User.create({
        username: username,
        name: name,
        email: email,
        password: pwd
    }).then(result => {
        //console.log(result);
        console.log("User Created Successfully");
        res.redirect(`/register-successfull?username=${username}`);
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.log(err)
            }
            else {
                console.log("Email sent:" + info.response)
            }
        })
    })
        .catch(err => console.log(err))
}

module.exports.getRegisterSuccessful = (req,res) => {
    const username = req.query.username
    //console.log(username)
    User.findAll({where: {username:username}})
    .then(result => {
        res.render('frontend/page-list/register-succesful',{
            title: 'Register Successfully',
            user:result
        })
    })
    .catch(err => {console.log(err)})
    
}