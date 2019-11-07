//This is where we will link to our controllers
const router = require("express").Router();
const mileageController = require("../../controllers/mileageController");

//This is what happens on the homepage
// router.route("/")
//   .get(mileageController.findAll)
//   .post(mileageController.create);

//Same thing for other routes
module.exports = router;