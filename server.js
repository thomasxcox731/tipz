var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var passport = require("passport");


var PORT = process.env.PORT || 3000;

// Require all models
var db = require("./models");

// Initialize Express
var app = express();

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/populate", { useNewUrlParser: true });

// When the server starts, create and save a new Account document to the db
// The "unique" rule in the Account model's schema will prevent duplicate libraries from being added to the server
db.Account.create({ name: "New Account 1" })
  .then(function(dbAccount) {
    // If saved successfully, print the new Account document to the console
    console.log(dbAccount);
  })
  .catch(function(err) {
    // If an error occurs, print it to the console
    console.log(err.message);
  })

//Routes

//1. POST a new tip to the database
app.post("/tips", function(req, res){
    db.Account.findById(accountId).then(function(dbAccount){
        db.Tips.create({
            amount: 5,
            date: Date.now(),
            comment: "For work"
        }).then(function(dbTip){
            dbAccount.tips.push(dbTip._id);
            dbAccounnt.save().then(function(dbTip){
                res.json(dbTip);
            })
        })
    })
})

app.get("/tips")

//2. POST a new mileage log to the database
app.post("/mileage", function(req, res){
    db.Account.findById(accountId).then(function(dbAccount){
        db.Mileage.create({
            amount: 6,
            date: Date.now(),
            purpose: "Medical"
        }).then(function(dbMileage){
            dbAccount.tips.push(dbMileage._id);
            dbAccounnt.save().then(function(dbMileage){
                res.json(dbMileage);
            })
        })
    })
})

app.get("/mileage")

//3. GET tips/mileage from the db and post to account page



// Start the server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });