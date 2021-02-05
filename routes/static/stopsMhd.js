const express = require("express");
const router = express.Router();
const stops = require('../../Data/MhdZAS.json')

router.get("/", async (req, res) => {
  res.send(stops);
});

module.exports = router;
