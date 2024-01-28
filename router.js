const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.send("You are in Home Page");
});

router.get("/menu", function (req, res) {
  res.send(" You are in Menu Page ");
});

router.get("/community", function (req, res) {
  res.send(" You are in Community Page ");
});

module.exports = router;
