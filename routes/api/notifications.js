const express = require("express");
const router = express.Router();

const keys = require('../../config/keys');

const helper = require('sendgrid').mail;
const sg = require('sendgrid')(keys.sendGridKey);

const schedule = require('node-schedule');

router.post("/", (req, res) => {

  User.findById(req.body.userId)
    .then( user => {
      let fullPlantName;
      if (req.body.nickname.length > 0) {
        fullPlantName = `${req.body.plantName}, ${req.body.nickname}`;
      } else {
        fullPlantName = `${req.body.plantName}`
      };
    
      const from_email = new helper.Email('plantr.notification@gmail.com');
      const to_email = new helper.Email(`${user.email}`);
      const initSubject = `You've set up a watering notification for your ${fullPlantName}!`;
      const initContent = new helper.Content('text/html',
        `<center><div width=400>
          Hi ${req.body.username}, you\'ll being reminded to water your ${fullPlantName} in ${req.body.frequency} days!
        </div></center>`
      );
    
      const initMail = new helper.Mail(from_email, initSubject, to_email, initContent);
    
      let request = sg.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: initMail.toJSON(),
      });
    
      // Dispatch the initial email using SendGrid API
      sg.API(request, function (error, response) {
        console.log(response.statusCode);
        console.log(response.body);
        console.log(response.headers);
      });

      // Convert watering frequency to milliseconds, create future date object, and extract day of month
      let firstDate = new Date(Date.now() + (req.body.frequency * 24 * 60 * 60 * 1000));
      firstDate = firstDate.getDate();

      // Reference for cron-style rules: '(minute) (hour) (day) (month) (day of week)'
      // It is important to note that cron-style scheduling using recurrence rules does NOT use a relative offset.
      // For example, '* * 5 * *' will create a recurrence only on the 5th of each month (Jan 5th, Feb 5th, etc)
      // as opposed to every 5 days. Even using the inherent recurrence functionality, such as '* * /5 * *', will
      // result in incorrectly scheduled jobs (Jan 5th, Jan 10th, Jan 15th)

      // Create first cron-style recurrence rule for 7:00 am on the calculated day of the month
      let rule = `* 7 ${firstDate} * *`;
    
      // Schedule first job using Node Schedule
      let job = schedule.scheduleJob(req.body.name, rule, function () {
        // All code inside this function is executed at the first scheduled notification date

        // To ensure proper notification frequency, a new future date is immediately calculated, as above
        let nextDate = new Date(Date.now() + (req.body.frequency * 24 * 60 * 60 * 1000));
        nextDate = nextDate.getDate();

        // The next recurrence of this rule is rescheduled using the calculated nextDate
        schedule.scheduledJobs[req.body.name].reschedule(`* 7 ${nextDate} * *`);
      
        // Generate the content of the notification email
        const alertSubject = `Time to water your ${fullPlantName}!`;
        const alertContent = new helper.Content('text/html',
          `Howdy ${req.body.username}, it\'s time water your ${fullPlantName}! Remember to give it ${req.body.waterAmount} liters of water today. It will thank you!`
        );
        const alertMail = new helper.Mail(from_email, alertSubject, to_email, alertContent);
    
        // Create a request and dispatch the scheduled notification email using SendGrid API
        request = sg.emptyRequest({
          method: 'POST',
          path: '/v3/mail/send',
          body: alertMail.toJSON(),
        });
    
        sg.API(request, function (error, response) {
          console.log(response.statusCode);
          console.log(response.body);
          console.log(response.headers);
        });
      });
    })

  res.json({ msg: "This is the notifications route" });
})

router.post("/cancel", (req, res) => {
  let job = schedule.scheduledJobs[req.body.name];
  let canceled = false;

  if (job) canceled = job.cancel();

  if (canceled) {
    res.json({ msg: "Notifications canceled" });
  } else {
    res.status(422).json({ msg: "Scheduled notifications not found" });
  };
})

module.exports = router;