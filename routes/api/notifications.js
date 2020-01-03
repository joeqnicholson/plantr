const express = require("express");
const router = express.Router();

const keys = require('../../config/keys');

const helper = require('sendgrid').mail;
const sg = require('sendgrid')(keys.sendGridKey);

const schedule = require('node-schedule');

router.post("/", (req, res) => {

  let fullPlantName;
  
  if (req.body.nickname.length > 0) {
    fullPlantName = `${req.body.plantName}, ${req.body.nickname}`;
  } else {
    fullPlantName = `${req.body.plantName}`
  };
  const from_email = new helper.Email('plantr.notification@gmail.com');
  const to_email = new helper.Email('kennylozeau@hotmail.com');
  const initSubject = `You've setup a watering notification for your ${req.body.plantName}!`;
  const initContent = new helper.Content('text/html',
    `<center><div width=400>
      Hi ${req.body.username}, you\'ll being reminded to water your ${req.body.plantName} in ${req.body.frequency} days!
    </div></center>`
  );

  const initMail = new helper.Mail(from_email, initSubject, to_email, initContent);

  const request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: initMail.toJSON(),
  });

  sg.API(request, function (error, response) {
    console.log(response.statusCode);
    console.log(response.body);
    // console.log(response.headers);
  });

  // let rule = new schedule.RecurrenceRule();
  // rule.second = new schedule.Range(0, 59, 10);
  let rule = `*/${req.body.frequency} * * * *`;

  let job = schedule.scheduleJob(req.body.name, rule, function () {
    console.log(req.body);
  
    const alertSubject = `Time to water your ${req.body.plantName}!`;
    const alertContent = new helper.Content('text/html',
      `Howdy ${req.body.username}, it\'s time water your ${req.body.plantName}! Remember to give it ${req.body.waterAmount} liters of water today. It will thank you!`
    );
    const alertMail = new helper.Mail(from_email, alertSubject, to_email, alertContent);

    // BELOW THIS THE EMAIL IS DISPATCHED

    // const request = sg.emptyRequest({
    //   method: 'POST',
    //   path: '/v3/mail/send',
    //   body: alertMail.toJSON(),
    // });

    // sg.API(request, function (error, response) {
    //   console.log(response.statusCode);
    //   console.log(response.body);
    //   // console.log(response.headers);
    // });
  });

  res.json({ msg: "This is the notifications route" });
})

router.post("/cancel", (req, res) => {
  console.log(schedule.scheduledJobs);
  let job = schedule.scheduledJobs[req.body.name];

  job.cancel();

  console.log("canceled?")

  res.json({ msg: "This is the notification cancel route" });

})

module.exports = router;