//Create an express server and import the reuired modules
const express = require("express");
const http = require("http");
//const bodyParser = require("body-parser");
const connectDB = require("./db/app.js");
//module.require("connectDB");

//Access the PORT environmental variable in .env
require("dotenv").config();

//Deconstruct the PORT variable accessed from .env file
const { PORT } = process.env;

//PORT 
const port = process.env.PORT || PORT

//Connect to database
//connectDB();

//Initialize express
const app = express();

//Initialize express middleware
//app.use(bodyParser.urlencoded({ extended: false }));

//serve static files like css,javascript and images
app.use(express.static("assets"));


//Set up express routes
app.get("/", (req, res) => {
    res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about.html", (req, res) => {
    res.sendFile("./views/about.html", { root: __dirname });
});

app.get("/contact.html", (req, res) => {
    res.sendFile("./views/contact.html", { root: __dirname });
});

app.get("/Register_User.html", (req, res) => {
    res.sendFile("./views/Register_User.html", { root: __dirname });
});

app.get("/select_location.html", (req, res) => {
    res.sendFile("./views/select_location.html", { root: __dirname });
});

app.get("/shipment_type.html", (req, res) => {
    res.sendFile("./views/shipment_type.html", { root: __dirname });
});

app.get("/Signin_user.html", (req, res) => {
    res.sendFile("./views/Signin_user.html", { root: __dirname });
});



//Listen for connection
app.listen(port, () => console.log(`app running on ${port}`));


