# README
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

# Significant Features
* User authentication
* Add and nickname plants into your garden collection
* Lookup houseplant care information
* Confirmation email when you add a plant
* Scheduled notifications to check/water an individual plant

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

## Scheduled Email Notifications
* Email Functionality
  * plantr watering notification emails are dispatched using the SendGrid API
  * An initial email is dispatched when the user adds a plant to their garden informing the user of the notifications being scheduled
  * Future notifications are emailed at a regular, plant-specific schedule until canceled by the user

* Scheduling Functionality
  * Basic cron-like job scheduling capability is provided by node-schedule package
  * Due to the limitations of cron-style scheduling, further logic was implemented to generate future events
    * Each time a scheduled job is initiated, all future scheduled occurrences are canceled and re-generated on-the-fly to maintain schedule accuracy

# Future Features
* Users 'review' plants and post tips/questions. They will create a _growing_ library of information
* Location based watering recommendations based on USDA hardiness zone data
___

## plantr was developed by:
* [Joe Nicholson](https://github.com/joeqnicholson)
* [Maurice Goldberg](https://github.com/Maurice-Goldberg)
* [Ed Herman](https://github.com/edherm)
* [Kenny Lozeau](https://github.com/kennylozeau)