const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    host: 'smtp.sendgrid.net',
    port: 25,
    auth: {
        user: 'apikey',
        pass: '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'
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
const setNotifications = (email, username, plantName, frequency, waterAmount) => {
    setTimeout(
        () => {
            sendEmail(
                `${email}`,

                //subject
                `Time to water your ${plantName}!`,

                //email body
                `Howdy ${username}, it\'s time water your ${plantName}! Remember to give it ${waterAmount} liters of water today. It will thank you!`
            );
        },
        frequency
    );
};

export default setNotifications;