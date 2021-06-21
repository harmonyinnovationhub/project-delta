//Create an express server and import the required modules
const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const { PORT } = process.env;
const db = require("./config/database.js");
const routers = require("./myRoutes/routes.js");
const sequelize = require("sequelize");
const Billing =require("./models/Billing.js");
const Customer = require("./models/Customer.js");
const Delivery = require("./models/Delivery.js");
const Driver = require("./models/Driver.js");
const routes = require("./myRoutes/routes.js");

//define the table association
Customer.hasMany(Billing, {
    foreignKey: {
        allowNull: false
    }
});

Customer.hasMany(Delivery, {
    foreignKey: {

        allowNull: false
    }
});

Customer.hasMany(Driver, {
    foreignKey: {
        allowNull: false
    }
});

//Initialize express
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
require("dotenv").config();

try {
   db.authenticate();
    console.log('Connection has been established successfully.');

} catch (error) {
  console.error('Unable to connect to the database:', error);
}

try {
    db.sync({force:true})
    .then((result) => {
        console.log(result);
    });
} catch (err) {
    console.log(err);
    };




//Deconstruct the PORT variable accessed from .env file
//PORT
const port = process.env.PORT || PORT;

//Initialize routes middleware
app.use(routes);

//serve static files like css,javascript and images
app.use(express.static("assets"));

//Set up express routes
//Listen for connection

app.listen(port, () => console.log(`app running on ${port}`))