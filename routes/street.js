const { MhdPoBus, validate } = require("../models/bus");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const fs = require("fs");



router.get("/", async (req, res) => {
  fs.readFile("./Data/uliceFinal.json", async (err, data) => {
    if (err) throw err;
    let dataO =JSON.parse(data);
    res.send(dataO);
  });
});

module.exports = router;
