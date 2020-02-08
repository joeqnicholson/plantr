# plantr
![Logo](https://raw.githubusercontent.com/joeqnicholson/plantr/master/frontend/src/components/plant.png)

### [plantr Live Site](https://plantr-app.herokuapp.com)

plantr is a MERN-stack single-page app which assists users with taking care of their houseplants. plantr supports a large variety of plants, providing users with helpful care information while also allowing watering notifications to be emailed to the user on the morning that each plant may require watering.



![Screenshot](https://raw.githubusercontent.com/joeqnicholson/plantr/master/frontend/public/planter_screenshot.png)

# Technologies Used

## Backend
* MongoDB/Mongoose
* Express
* Node.js

## Frontend
* React/Redux
* HTML5
* CSS 3

## User Authentication
* Core Functionality
  * Users are able to create a plantr account, which then allows them to sign in and sign out
  * A demo account is also available for browsing plantr as a guest
* Validations
  * Users are required to use a valid unique email address
  * Passwords must be at least 6 characters in length
  * Users are required to verify their password during account creation

## Add plants to garden collection
* Users can select plants from the plantr database to add to their garden
* Plants can be given identifying nicknames by the user
* Automatic watering notifications are scheduled for each plant in a user's garden

## OwnedPlant Joins Architecture
* An array is populated for the front end by querying for instances where `ownedPlants.userId` is equal to `user.id` in the ownedPlant document database
  ```javascript
  // plantr/routes/api/ownedPlants.js

  router.get("/:userId", passport.authenticate('jwt', { session: false }),
      (req, res) => {
          OwnedPlant.find({userId: req.params.userId})
              .then(ownedPlants => {
                  res.json(ownedPlants);
              })
              .catch(err => {
                  res.status(404).json({ 
                      errMsg: "There was an issue retrieving your plants" 
                  })
              });
      }
  )
  ```

## Scheduled Email Notifications
* Email Functionality
  * plantr watering notification emails are dispatched using the SendGrid API
  * An initial email is dispatched when the user adds a plant to their garden informing the user of the notifications being scheduled
  * Future notifications are emailed at a regular, plant-specific schedule until canceled by the user

* Scheduling Functionality
  * Basic cron-like job scheduling capability is provided by Node Schedule package
  ```javascript
  // plantr/routes/api/notifications.js

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
  ```
  * Due to the limitations of cron-style scheduling, further logic was implemented to generate future events
    * Each time a scheduled job is initiated, all future scheduled occurrences are canceled and re-generated on-the-fly to maintain schedule accuracy
  ```javascript
  // plantr/routes/api/notifications.js

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
  ```

# Future Features
* Users 'review' plants and post tips/questions. They will create a _growing_ library of information
* Location based watering recommendations based on USDA hardiness zone data
___

## plantr was developed by:
* [Joe Nicholson](https://github.com/joeqnicholson)
* [Maurice Goldberg](https://github.com/Maurice-Goldberg)
* [Ed Herman](https://github.com/edherm)
* [Kenny Lozeau](https://github.com/kennylozeau)