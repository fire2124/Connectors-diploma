const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const stops = require('../Data/Zastavky_SAD.json')


router.get("/", async (req, res) => {
  res.send(stops);
});

module.exports = router;
