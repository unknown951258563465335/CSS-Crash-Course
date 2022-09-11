var express = require('express');
var nodemailer = require('nodemailer');
//var config = require('./config.js');

var app = express();

var smtpTransport = nodemailer.createTransport({

    service: 'Gmail',
    auth: {
        // enter your gmail account
        user: 'email',
        // enter your gmail password
        pass: 'password'
    }
});

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.send('./public/index.html');
});

app.get('/send', function (req, res) {

    var mailOptions = {
        to: req.query.to,
        subject: 'Contact Form Message',
        from: "Contact Form Request" + "<" + req.query.from + '>',
        html:  "From: " + req.query.f_name + req.query.l_name + "<br>" +
               "User's email: " + req.query.user + "<br>" +     "Message: " + req.query.text
    }

    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function (err, response) {
        if (err) {
            console.log(err);
            res.end("error");
        } else {
            console.log("Message sent: " + JSON.stringify(response));
            res.end("sent");
        }
    });
});

app.listen(8080, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Listening on port on 8080");
    }
});
