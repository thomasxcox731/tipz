//Dependencies 
var express = require("express");
var mongojs = require("mongojs");
var app = express();

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

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
                            date: req.body.date, 
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
                            date: req.body.date, 
                            tips: req.body.tips,
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