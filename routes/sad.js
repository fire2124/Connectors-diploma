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
  res.status(201).send("created");
});

router.post("/", async (req, res) => {
  
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  console.log(req.body);
  let sadBus = new SadPoBus({
    type: req.body.type,
    geometry: {
      type: req.body.geometry.type,
      coordinates: req.body.geometry.coordinates,
    },
    properties: {
      Line: req.body.properties.Line,
      Trip: req.body.properties.Trip,
      Delay: req.body.properties.Delay,
      Dir: req.body.properties.Dir,
      TripTime: req.body.properties.TripTime,
      From: req.body.properties.From,
      Via: req.body.properties.Via,
      To: req.body.properties.To,
      Street: req.body.properties.Street,
      Order_In_Json_Id: req.body.properties.Order_In_Json_Id,
      Type: req.body.properties.Type,
      Current_Time: req.body.properties.Current_Time,
      CHANGE_OF_Delay: req.body.properties.CHANGE_OF_Delay,
    }
  });
  sadBus = await sadBus.save();
  res.status(201).send("created");
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const bus = await SadPoBus.findByIdAndUpdate(
    req.params.id,
    {
      type: req.body.type,
      geometry: {
        type: req.body.geometry.type,
        coordinates: req.body.geometry.coordinates,
      },
      properties: {
        Line: req.body.properties.Line,
      Trip: req.body.properties.Trip,
      Delay: req.body.properties.Delay,
      Dir: req.body.properties.Dir,
      TripTime: req.body.properties.TripTime,
      From: req.body.properties.From,
      Via: req.body.properties.Via,
      To: req.body.properties.To,
      Street: req.body.properties.Street,
      Order_In_Json_Id: req.body.properties.Order_In_Json_Id,
      Type: req.body.properties.Type,
      Current_Time: req.body.properties.Current_Time,
      CHANGE_OF_Delay: req.body.properties.CHANGE_OF_Delay,
      },
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
