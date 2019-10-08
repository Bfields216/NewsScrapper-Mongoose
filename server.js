// var express = require("express");
// var logger = require("morgan");
// var mongoose = require("mongoose");
// var bodyParser = require('body-parser');
// var exphbs = require('body-parser'),



// var PORT = process.env.PORT || 3000;

// // Initialize Express
// var app = express();

// // Configure middleware

// // Use morgan logger for logging requests
// app.use(logger("dev"));
// // Parse request body as JSON
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// // Make public a static folder
// app.use(express.static("public"));

// // Handlebars
// app.set('views', './views')
// app.engine(
//   'handlebars',
//   exphbs({
//     defaultLayout: "main"
//   })
// );
// // Routes
// app.set("view engine", "handlebars");

// // Connect to the Mongo DB
// mongoose.connect("mongodb://localhost/newsscraper", { useNewUrlParser: true });



// // Start the server
// app.listen(PORT, function() {
//   console.log("App running on port " + PORT + "!");
// });
var express    = require('express'),
    bodyParser = require('body-parser'),
    exphbs     = require('express-handlebars'),
    logger     = require("morgan");

var PORT = process.env.PORT || 3000;

// Initialize Express
var app = express();

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Handlebars
app.set('views', './views')
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require('./routes/apiRoutes')(app)

// Start the server
app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });