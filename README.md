# Project Structure

This is a Base Node JS Project Template, Which anyone can use as it has been prepared by keeping some of the most important code principles and project management recommendations.Feel Free To Change anythings.

`src` ->Inside the src folder all the actual source code regarding the project will reside,this will not include any kind of tests.(You might want to make separated tests folder)

Lets take a Look inside the `src` folder

- `config` -> In this folder anything and everything regarding any configurations & Setup of a library or module will be done. For Example: setting up `dotenv` so that we can use the environment variable anywhere in a cleaner fashion, this is done in the `server-config.js`. One more example can be to setup you logging library that can help you to prepare meaningful logs,so configurations for this library should also be done here

- `routes`->  In the routes folder,We register a route and the corresponding middleware and controllers to it

- `middlewares` -> They are just going to intercept the incoming requests where we can write our validators, authenticators etc
- `controllers` -> They are kind of the last middlewares as post them you call your business layer to execute the business login.In Controllers, We just receive the incoming requests and data and then pass it to the business layer, and once business layer returns an outout, we structure the API response in controllers and send the output

-`repositories` -> This Folder contains all the login using which we interact the DB by writing queries,all the raw queries Or ORM queries will go there

- `services`  -> It contains the business login and interacts with repositories for data from the database

- `utils` -> It contains helper methods,error classes etc
