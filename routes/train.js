const express = require("express");
const router = express.Router();
let trainAll = [];

//for ChangeOfVariation
router.get("/firstJSON/1", async (req, res) => {
  res.send(trainAll);
});
//for ChangeOfVariation
router.post("/firstJSON/1", async (req, res) => {
  //console.log(req.body);
  trainAll = req.body;
  res.status(201).send("created");
});

module.exports = router;
