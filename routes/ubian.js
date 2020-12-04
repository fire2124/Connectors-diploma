const { SadPoBus, validate } = require("../models/sad");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();


let busAll = [];

//for ChangeOfVariation
router.get("/firstJSON/1", async (req, res) => {
  res.send(busAll);
});
//for ChangeOfVariation
router.post("/firstJSON/1", async (req, res) => {
  //console.log(req.body);
  busAll = req.body;
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
    console.log(req.body);
    
  let sadBus = new SadPoBus({
    Line: req.body.Line,
    Trip: req.body.Trip,
    Delay: req.body.Delay,
    Lat: req.body.Lat,
    Lng: req.body.Lng,
    Dir: req.body.Dir,
    TripTime: req.body.TripTime,
    From: req.body.From,
    Via: req.body.Via,
    To: req.body.To,
    OrderInJsonId: req.body.OrderInJsonId,
    Type: req.body.Type,
    CurrentTime: req.body.CurrentTime,
  });
  sadBus = await sadBus.save();
  res.send(req);
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const bus = await SadPoBus.findByIdAndUpdate(
    req.params.id,
    {
      Line: req.body.Line,
      Trip: req.body.Trip,
      Delay: req.body.Delay,
      Lat: req.body.Lat,
      Lng: req.body.Lng,
      Dir: req.body.Dir,
      TripTime: req.body.TripTime,
      From: req.body.From,
      Via: req.body.Via,
      To: req.body.To,
      OrderInJsonId: req.body.OrderInJsonId,
      Type: req.body.Type,
      CurrentTime: req.body.CurrentTime,
    },
    { new: true }
  );

  if (!bus)
    return res.status(404).send("The bus with the given ID was not found.");

  res.send(bus);
});

router.delete("/:id", async (req, res) => {
  const bus = await SadPoBus.findByIdAndRemove(req.params.id);

  if (!bus)
    return res.status(404).send("The bus with the given ID was not found.");

  res.send(bus);
});

router.get("/:id", async (req, res) => {
  const bus = await SadPoBus.findById(req.params.Id);
  console.log(bus);

  if (!bus)
    return res.status(404).send("The bus with the given ID was not found.");

  res.send(bus);
});

module.exports = router;
