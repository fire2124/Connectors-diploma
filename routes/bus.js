const { MhdPoBus, validate } = require("../models/bus");
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
  console.log(req.body);
  busAll = req.body;
});

router.post("/", async (req, res) => {
  let bussAll = [];
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let mhdPoBus = new MhdPoBus({
    number: req.body.number,
    numberAlt: req.body.numberAlt,
    direction: req.body.direction,
    lat: req.body.lat,
    lng: req.body.lng,
    departure: req.body.departure,
    delay: req.body.delay,
    vehicle: req.body.vehicle,
    station: req.body.station,
    isTechnical: req.body.isTechnical,
    OrderInJsonId: req.body.OrderInJsonId,
    Type: req.body.Type,
    CurrentTime: req.body.CurrentTime,
  });
  mhdPoBus = await mhdPoBus.save();
  res.send(req);
  bussAll.push(mhdPoBus);
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const bus = await MhdPoBus.findByIdAndUpdate(
    req.params.id,
    {
      number: req.body.number,
      numberAlt: req.body.numberAlt,
      direction: req.body.direction,
      lat: req.body.lat,
      lng: req.body.lng,
      departure: req.body.departure,
      delay: req.body.delay,
      vehicle: req.body.vehicle,
      station: req.body.station,
      isTechnical: req.body.isTechnical,
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
  const bus = await MhdPoBus.findByIdAndRemove(req.params.id);

  if (!bus)
    return res.status(404).send("The bus with the given ID was not found.");

  res.send(bus);
});

router.get("/:id", async (req, res) => {
  const bus = await MhdPoBus.findById(req.params.Id);
  console.log(bus);

  if (!bus)
    return res.status(404).send("The bus with the given ID was not found.");

  res.send(bus);
});

module.exports = router;
