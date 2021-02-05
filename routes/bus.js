const express = require("express");
const router = express.Router();

let busAll = [];

//for ChangeOfDELAY
router.get("/firstJSON/1", async (req, res) => {
  res.send(busAll);
});
//for ChangeOfDELAY
router.post("/firstJSON/1", async (req, res) => {
  console.log( req.body);
  busAll = req.body;
  res.status(201).send("created");
});

module.exports = router;
