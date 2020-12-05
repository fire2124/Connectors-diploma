const { Ubian, validate } = require("../models/ubian");
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
  // let json = await new Promise((resolve, reject) => {
  //   if (error) reject(res);
  //   else resolve(req);
  // });

  // console.log(json);
  // req = json;
  let sadBus = new Ubian({
    type: req.body.type,
    geometry: {
      coordinates: req.body.geometry.coordinates,
      type: req.body.geometry.type,
    },
    properties: {
      vehicleID: req.body.properties.vehicleID,
      delay: req.body.properties.delay,
      lastCommunication: req.body.properties.lastCommunication,
      lastStopOrder: req.body.properties.lastStopOrder,
      isOnStop: req.body.properties.isOnStop,
      tooltip: req.body.properties.tooltip,
      trip: req.body.properties.trip,
      destination: req.body.properties.destination,
      destinationStopName: req.body.properties.destinationStopName,
      destinationCityName: req.body.properties.destinationCityName,
      from: req.body.properties.from,
      via: req.body.properties.via,
      lineID: req.body.properties.lineID,
      lineType: req.body.properties.lineType,
      type: req.body.properties.type,
      lineNumber: req.body.properties.lineNumber,
      Current_Time: req.body.properties.Current_Time,
      Order_In_Json_Id: req.body.properties.Order_In_Json_Id,
      CHANGE_OF_Variation: req.body.properties.CHANGE_OF_Variation,
      Street: req.body.properties.Street,
    },
  });

  sadBus = await sadBus.save();

  res.send(req);
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const bus = await Ubian.findByIdAndUpdate(
    req.params.id,
    {
      type: req.body.type,
      geometry: {
        coordinates: req.body.geometry.coordinates,
        type: req.body.geometry.type,
      },
      properties: {
        vehicleID: req.body.properties.vehicleID,
        delay: req.body.properties.delay,
        lastCommunication: req.body.properties.lastCommunication,
        lastStopOrder: req.body.properties.lastStopOrder,
        isOnStop: req.body.properties.isOnStop,
        tooltip: req.body.properties.tooltip,
        trip: req.body.properties.trip,
        destination: req.body.properties.destination,
        destinationStopName: req.body.properties.destinationStopName,
        destinationCityName: req.body.properties.destinationCityName,
        from: req.body.properties.from,
        via: req.body.properties.via,
        lineID: req.body.properties.lineID,
        lineType: req.body.properties.lineType,
        type: req.body.properties.type,
        lineNumber: req.body.properties.lineNumber,
        Current_Time: req.body.properties.Current_Time,
        Order_In_Json_Id: req.body.properties.Order_In_Json_Id,
        CHANGE_OF_Variation: req.body.properties.CHANGE_OF_Variation,
        Street: req.body.properties.Street,
      },
    },
    { new: true }
  );

  if (!bus)
    return res.status(404).send("The bus with the given ID was not found.");

  res.send(bus);
});

router.delete("/:id", async (req, res) => {
  const bus = await Ubian.findByIdAndRemove(req.params.id);

  if (!bus)
    return res.status(404).send("The bus with the given ID was not found.");

  res.send(bus);
});

router.get("/:id", async (req, res) => {
  const bus = await Ubian.findById(req.params.Id);
  console.log(bus);

  if (!bus)
    return res.status(404).send("The bus with the given ID was not found.");

  res.send(bus);
});

module.exports = router;
