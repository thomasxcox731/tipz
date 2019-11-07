const db = require("../models");

//Here we will define our methods for the Mileage Controller
module.exports = {
    findById: function(req, res) {
        db.Mileage
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
      //Something like this!
}