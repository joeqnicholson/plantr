const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    //MAILTRAP EMAIL TEST SERVER
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: 'ada75b0a489129',
        pass: 'ac289b1fe63461'
    }

    //Gmail service
    // service: 'Gmail',
    // auth: {
    //     user: 'plantr.notification@gmail.com',
    //     pass: 'plantrpassword4'
    // }
});

module.exports = function sendEmail(to, subject, message) {
    const mailOptions = {
        from: 'plantr.notification@gmail.com',
        to,
        subject,
        html: message,
    };

    transport.sendMail(mailOptions, (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log(`Message sent: ${mailOptions.html}`);
        }
    });
};