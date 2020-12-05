const { Train, validate } = require("../models/train");
const mongoose = require("mongoose");
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
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let train = new Train({
    type:req.body.type,
    geometry: {
      coordinates: req.body.geometry.coordinates,
      type: req.body.geometry.type,
    },
    properties: {
      Nazov: req.body.properties.Nazov,
      Meska: req.body.properties.Meska,
      MeskaText: req.body.properties.MeskaText,
      Current_Stop: req.body.properties.Current_Stop,
      Dopravca: req.body.properties.Dopravca,
      Angle: req.body.properties.Angle,
      Order_In_Station: req.body.properties.Order_In_Station,
      PotvrdenyOdj: req.body.properties.PotvrdenyOdj,
      CasDay: req.body.properties.CasDay,
      CasTime: req.body.properties.CasTime,
      CasPlanDay: req.body.properties.CasPlanDay,
      CasPlanTime: req.body.properties.CasPlanTime,
      From: req.body.properties.From,
      To: req.body.properties.To,
      Current_Time: req.body.properties.Current_Time,
      Type: req.body.properties.Type,
      Order_In_JsonId: req.body.properties.Order_In_JsonId,
      CHANGE_OF_Variation: req.body.properties.CHANGE_OF_Variation,
    }
    });
  train = await train.save();
  res.send(req);
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const train = await Train.findByIdAndUpdate(
    req.params.id,
    {
      type:req.body.type,
      geometry: {
        coordinates: req.body.geometry.coordinates,
        type: req.body.geometry.type,
      },
      properties: {
        Nazov: req.body.properties.Nazov,
        Meska: req.body.properties.Meska,
        MeskaText: req.body.properties.MeskaText,
        Current_Stop: req.body.properties.Current_Stop,
        Dopravca: req.body.properties.Dopravca,
        Angle: req.body.properties.Angle,
        Order_In_Station: req.body.properties.Order_In_Station,
        PotvrdenyOdj: req.body.properties.PotvrdenyOdj,
        CasDay: req.body.properties.CasDay,
        CasTime: req.body.properties.CasTime,
        CasPlanDay: req.body.properties.CasPlanDay,
        CasPlanTime: req.body.properties.CasPlanTime,
        From: req.body.properties.From,
        To: req.body.properties.To,
        Current_Time: req.body.properties.Current_Time,
        Type: req.body.properties.Type,
        Order_In_JsonId: req.body.properties.Order_In_JsonId,
        CHANGE_OF_Variation: req.body.properties.CHANGE_OF_Variation,
      }
    },
    { new: true }
  );

  if (!train)
    return res.status(404).send("The train with the given ID was not found.");

  res.send(train);
});

router.delete("/:id", async (req, res) => {
  const train = await Train.findByIdAndRemove(req.params.id);

  if (!train)
    return res.status(404).send("The train with the given ID was not found.");

  res.send(train);
});

router.get("/:id", async (req, res) => {
  const train = await Train.findById(req.params.Id);
  console.log(train);

  if (!train)
    return res.status(404).send("The train with the given ID was not found.");

  res.send(train);
});

module.exports = router;
