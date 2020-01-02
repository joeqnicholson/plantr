const nodemailer = require('nodemailer');
const keys = require('./config/keys');

const transport = nodemailer.createTransport({
    host: 'smtp.sendgrid.net',
    port: 25,
    auth: {
        user: 'apikey',
        pass: keys.sendGridKey
    }
});

const sendEmail = (to, subject, message) => {
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

//this interval timer should get triggered as soon as a user adds a new plant to their roster
const setNotifications = (email, username, plantName, waterAmount) => {
    sendEmail(
        email,

        //subject
        `Time to water your ${plantName}!`,

        //email body
        `Howdy ${username}, it\'s time water your ${plantName}! Remember to give it ${waterAmount} liters of water today. It will thank you!`
    );
};

// export default setNotifications;
module.exports = sendEmail;