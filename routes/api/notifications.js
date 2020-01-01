const express = require("express");
const router = express.Router();

// import setNotifications from '../../set_notifications';
const schedule = require('node-schedule');

// router.get("/test", (req, res) => {
//     res.json({ msg: "This is the plant route" });
// });

router.get("/", (req, res) => {
  // Plant.find().then(plants => res.json(plants))

  let rule = new schedule.RecurrenceRule();
  rule.minute = new schedule.Range(0, 59, 1);

  let job = schedule.scheduleJob(rule, function () {
    console.log("test");
  });

  res.json({ msg: "This is the notifications route" });

  // setNotifications(email, username, plantName, waterAmount);
})

module.exports = router;