const express = require("express");
const router = express.Router();

let weather = [];

router.get("/firstJSON/1", async (req, res) => {
  res.send(weather);
});

router.post("/firstJSON/1", async (req, res) => {
  weather = req.body;
  //console.log(weather);
  res.status(201).send("created");
});

module.exports = router;
