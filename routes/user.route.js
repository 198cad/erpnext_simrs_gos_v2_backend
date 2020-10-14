const { createUser } = require("../controllers/user.controller");

const router = require("express").Router();

router.route("/user").post(createUser);

module.exports = router;
