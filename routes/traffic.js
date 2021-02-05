const express = require("express");
const router = express.Router();

let traffic = [];

//for ChangeOfVariation
router.get("/firstJSON/1", async (req, res) => {
  res.send(traffic);
});
//for ChangeOfVariation
router.post("/firstJSON/1", async (req, res) => {
  //console.log(req.body);
  traffic = req.body;
  res.status(201).send("created");
});

module.exports = router;
