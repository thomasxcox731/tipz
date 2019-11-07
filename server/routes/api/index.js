const router = require("express").Router();
const mileageRoutes = require("./mileage");

// Book routes
router.use("/mileage", mileageRoutes);

module.exports = router;