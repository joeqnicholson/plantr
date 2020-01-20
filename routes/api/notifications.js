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
    
      // let request = sg.emptyRequest({
      //   method: 'POST',
      //   path: '/v3/mail/send',
      //   body: initMail.toJSON(),
      // });
    
      // sg.API(request, function (error, response) {
      //   console.log(response.statusCode);
      //   console.log(response.body);
      //   console.log(response.headers);
      // });
    
      let firstDate = new Date(Date.now() + (req.body.frequency * 24 * 60 * 60 * 1000));
      firstDate = firstDate.getDate();

      let rule = `* 7 ${firstDate} * *`;
      // let rule = `${firstDate} * * * * *`;
    
      let job = schedule.scheduleJob(req.body.name, rule, function () {
        // console.log(req.body);

        console.log(schedule.scheduledJobs);
        // schedule.scheduledJobs[req.body.name].reschedule('1 * * * * *');
        console.log(schedule.scheduledJobs[req.body.name].nextInvocation());

        let nextDate = new Date(Date.now() + (req.body.frequency * 24 * 60 * 60 * 1000));
        nextDate = nextDate.getDate();

        schedule.scheduledJobs[req.body.name].reschedule(`* 7 ${nextDate} * *`);
        // console.log(schedule.scheduledJobs[req.body.name].nextInvocation());
      
        const alertSubject = `Time to water your ${fullPlantName}!`;
        const alertContent = new helper.Content('text/html',
          `Howdy ${req.body.username}, it\'s time water your ${fullPlantName}! Remember to give it ${req.body.waterAmount} liters of water today. It will thank you!`
        );
        const alertMail = new helper.Mail(from_email, alertSubject, to_email, alertContent);
    
        // BELOW THIS THE EMAIL IS DISPATCHED
    
        // request = sg.emptyRequest({
        //   method: 'POST',
        //   path: '/v3/mail/send',
        //   body: alertMail.toJSON(),
        // });
    
        // sg.API(request, function (error, response) {
        //   console.log(response.statusCode);
        //   console.log(response.body);
        //   console.log(response.headers);
        // });
      });
    })

  res.json({ msg: "This is the notifications route" });
})

router.post("/cancel", (req, res) => {
  console.log(schedule.scheduledJobs);
  console.log(req.body.name);
  let job = schedule.scheduledJobs[req.body.name];
  let canceled = false;

  if (job) canceled = job.cancel();

  if (canceled) {
    res.json({ msg: "Notifications canceled" });
  } else {
    res.status(422).json({ msg: "There was a problem" });
  };
})

module.exports = router;