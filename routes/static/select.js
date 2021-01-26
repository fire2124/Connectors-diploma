const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
//const nice = require('../../Data/Nice.json')

let nice;
router.get("/all", async (req, res) => {
    //console.log(res)
  res.send(nice);
});

router.post("/all", async (req, res) => {
    //console.log(res)
    console.log(req)
    console.log("/upload: Received data: body length: ", req.headers['content-length']);
    res.json( { status: 'ok', bytesReceived: req.headers['content-length']});
    //res.status(201).send("created");
});

module.exports = router;
