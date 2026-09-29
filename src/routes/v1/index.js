const express = require("express");

const router = express.Router();

const {info} = require("../../controller")

router.get("/info" , info)

module.exports = router;