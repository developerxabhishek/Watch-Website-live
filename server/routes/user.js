const express = require("express");

const router = express.Router();

const { createUser, signin, verifyEmail } = require("../controllers/user");
const { validateUser, validate } = require("../middlewares/validator");

router.post("/create", validateUser, validate, createUser);

router.post("/signin", signin);

router.post("/verify-email", verifyEmail);

router.post("/add-product",)


module.exports = router;
