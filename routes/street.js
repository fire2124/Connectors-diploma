const { MhdPoBus, validate } = require("../models/bus");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const street = require('../Data/uliceFinal.json')


router.get("/", async (req, res) => {
  res.send(street);
});

module.exports = router;
