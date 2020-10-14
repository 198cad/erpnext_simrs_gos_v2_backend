const router = require("express").Router();
const { getPatients } = require("../controllers/patient.controller");

router.route("/patients").get(getPatients);

module.exports = router;
