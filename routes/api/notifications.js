const express = require("express");
const router = express.Router();

const keys = require('../../config/keys');

const helper = require('sendgrid').mail;
const sg = require('sendgrid')(keys.sendGridKey);

const schedule = require('node-schedule');

router.post("/", (req, res) => {

  // let rule = new schedule.RecurrenceRule();
  // rule.second = new schedule.Range(0, 59, 10);
  let rule = `*/${req.body.frequency} * * * *`;

  let job = schedule.scheduleJob(req.body.name, rule, function () {
    console.log(req.body);
    const from_email = new helper.Email('plantr.notification@gmail.com');
    const to_email = new helper.Email('rvt76170@zzrgg.com');
    const subject = "test subject";
    const content = new helper.Content('text/html', 'I\'m replacing the <strong>body tag</strong>')
    const mail = new helper.Mail(from_email, subject, to_email, content);

    // BELOW THIS THE EMAIL IS DISPATCHED

    // const request = sg.emptyRequest({
    //   method: 'POST',
    //   path: '/v3/mail/send',
    //   body: mail.toJSON(),
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