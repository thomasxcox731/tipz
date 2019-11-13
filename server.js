//Dependencies 
var express = require("express");
var mongojs = require("mongojs");
var passport = require("passport")
    , LocalStrategy = require('passport-local').Strategy;
// const PORT = process.env.PORT || 3001;
// const mongoose = require("mongoose");
// const routes = require("./routes");

var app = express();

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }
// // Add routes, both API and view
// app.use(routes);

// // Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

// Start the API server
// app.listen(PORT, function() {
//     console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
//   });

//Passport User Authentication
app.post('/', 
    passport.authenticate('local', 
    {successRedirect: '/account', 
    failureRedirect: '/' }
    ), 
    passport.use(new LocalStrategy(
        function(username, password, done) {
        User.findOne({ username: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
            return done(null, false, { message: 'Incorrect username.' });
            }
            if (!user.validPassword(password)) {
            return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        });
        }
    ))
);

// Database configuration
var databaseUrl = "UsersDB";
var collections = ["Users"];

// Hook mongojs config to db variable
var db = mongojs(databaseUrl, collections);
// Log any mongojs errors to console
db.on("error", function(error) {
    console.log("Database Error:", error);
  });


//Routes (URL's are placeholders for now)

//1. Create User Account (create User1 Collection in UserDB)
app.post("/", function(req, res){
    db.Users.insert(req.body, function(error, saved){
        if(error){
            console.log("error");
        }
        else {
            res.send(saved);
        }
    });
});

//2. Create Mileage Log (updating documents inside User1 Collection)
    //This is the only route that will utilize the API
    app.post("/mileage", function(req, res){
        db.Users.Jim.update(
            {
            _id: mongojs.ObjectId(req.params.id)
            },
            {
                $set: {
                    mileage: {
                        log: {
                            milesTravelled: req.body.milesTravelled,
                            purpose: req.body.purpose,
                            modified: Date.now()
                        }
                    }
                }
            },
            function(error, edited) {
                // Log any errors from mongojs
                if (error) {
                  console.log(error);
                  res.send(error);
                }
                else {
                  // Otherwise, send the mongojs response to the browser
                  // This will fire off the success function of the ajax request
                  console.log(edited);
                  res.send(edited);
                }
              }
        )
    });

//3. Create Tip Log (create documents inside User1 Collection)
    app.post("/tips", function(req, res){
        db.Users.Jim.update(
            {
            _id: mongojs.ObjectId(req.params.id)
            },
            {
                $set: {
                    tips: {
                        log: { 
                            tips: req.body.tips,
                            date: Date.now(),
                            modified: Date.now()
                        }
                    }
                }
            },
            function(error, edited) {
                // Log any errors from mongojs
                if (error) {
                  console.log(error);
                  res.send(error);
                }
                else {
                  // Otherwise, send the mongojs response to the browser
                  // This will fire off the success function of the ajax request
                  console.log(edited);
                  res.send(edited);
                }
              }
        )
    });

//4. Display User1 Data (get User1 Collection from db and display it)
app.get("account/:id", function (req, res){
    db.Users.findOne(
        {_id: mongojs.ObjectId(req.params.id)},
        function (err, found){
            if (err){
                console.log(err);
                res.send(err);
            }
            else {
                console.log(found);
                res.send(found);
            }
        }
    );
});