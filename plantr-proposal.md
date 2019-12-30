# Plantr

## Overview

'plantr' is a web application to monitior the watering schedule of houseplants. 

# MVPs

In order for plantr to operate as a minimum viable product it will have the following functionality:


* Create a personal account for a user.

* Allow users to have a 'garden' which is represented as grid on the homepage. Each plant in the garden will send a notification when the plant is ready to be watered, with the ammount of water needed to the user via e-mail (or text).

# Workload delegation

* Day 1
    - Ed and Kenny will work together to have fully styled user auth by the end of the day.
    - Maurice will collect data and finish the frequency chart of the plants in our database. The database should be ready for seeding by the end of the day.
    - Joe will work on the design of the splash page.

* Day 2 
    - Ed will seed the database and create tables for the plants, including the clip art thumbnail.
    - Kenny will write the functionality of a user being able to add or remove a plant from their 'garden'.
    - Maurice will work on implementing the email notification system. This means research on the email notification itself and using a date/ time api monitor the 'created-at' timestamp used for a particular plant.
    - Joe will set up the AWS bucket. 

* Day 4
    - Kenny will style the 'add-plant' modal and make it fully functional with a search bar.
    - Maurice and Ed will work to gaurentee the notification system works perfectly.
    - Joe will help with the front end and styling.

* Day 5
    - Finishing touches on the features listed above.
    - If we are confident in the time we have we can implement location services.


# Technologies Used

* Mongo DB
* Express
* Node
* React-Redux




