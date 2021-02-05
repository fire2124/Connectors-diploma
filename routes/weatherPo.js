const express = require("express");
const router = express.Router();

let weather = [];

//for ChangeOfVariation
router.get("/firstJSON/1", async (req, res) => {
  res.send(weather);
});
//for ChangeOfVariation
router.post("/firstJSON/1", async (req, res) => {
  weather = req.body;
  //console.log(weather);
  res.status(201).send("created");
});


module.exports = router;
