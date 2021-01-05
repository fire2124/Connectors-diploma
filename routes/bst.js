const { BST, validate } = require("../models/bst");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

//postOneByOne
router.post("/", async (req, res) => {
  console.log(req.body);
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let bst = new BST({
    type: req.body.type,
    geometry: {
      type: req.body.geometry.type,
      coordinates: req.body.geometry.coordinates,
    },
    properties: {
      ROUTE_NUMBER: req.body.properties.ROUTE_NUMBER,
      PLANNED_START: req.body.properties.PLANNED_START,
      DIRECTION: req.body.properties.DIRECTION,
      BUS_STOP_ORDER_NUM: req.body.properties.BUS_STOP_ORDER_NUM,
      BUS_STOP_NAME_1: req.body.properties.BUS_STOP_NAME_1,
      BUS_STOP_NUM_1: req.body.properties.BUS_STOP_NUM_1,
      BUS_STOP_SUB_NUM_1: req.body.properties.BUS_STOP_SUB_NUM_1,
      BUS_STOP_NAME_2: req.body.properties.BUS_STOP_NAME_2,
      BUS_STOP_NUM_2: req.body.properties.BUS_STOP_NUM_2,
      BUS_STOP_SUB_NUM_2: req.body.properties.BUS_STOP_SUB_NUM_2,
      PLANNED_ROAD: req.body.properties.PLANNED_ROAD,
      REAL_ROAD: req.body.properties.REAL_ROAD,
      VEHICLE_NUMBER: req.body.properties.VEHICLE_NUMBER,
      VARIATION: req.body.properties.VARIATION,
      CHANGE_OF_Variation: req.body.properties.CHANGE_OF_Variation,
      Street: req.body.properties.Street,
      Order_In_Json_Id: req.body.properties.OrderInJsonId,
      Type: req.body.properties.Type,
      Current_Time: req.body.properties.Current_Time,
      Line: req.body.properties.Line,
      Trip: req.body.properties.Trip,
      Delay: req.body.properties.Delay,
      Dir: req.body.properties.Dir,
      TripTime: req.body.properties.TripTime,
      From: req.body.properties.From,
      Via: req.body.properties.Via,
      To: req.body.properties.To,
      CHANGE_OF_Delay: req.body.properties.CHANGE_OF_Delay,
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
    },
  });
  try {
    bst = await bst.save();
    res.status(201).send("created");
  } catch (e) {
    console.log(e);
  }
});

//Update
router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const bst = await BST.findByIdAndUpdate(
    req.params.id,
    {
      type: req.body.type,
      geometry: {
        type: req.body.geometry.type,
        coordinates: req.body.geometry.coordinates,
      },
      properties: {
        ROUTE_NUMBER: req.body.properties.ROUTE_NUMBER,
        PLANNED_START: req.body.properties.PLANNED_START,
        DIRECTION: req.body.properties.DIRECTION,
        BUS_STOP_ORDER_NUM: req.body.properties.BUS_STOP_ORDER_NUM,
        BUS_STOP_NAME_1: req.body.properties.BUS_STOP_NAME_1,
        BUS_STOP_NUM_1: req.body.properties.BUS_STOP_NUM_1,
        BUS_STOP_SUB_NUM_1: req.body.properties.BUS_STOP_SUB_NUM_1,
        BUS_STOP_NAME_2: req.body.properties.BUS_STOP_NAME_2,
        BUS_STOP_NUM_2: req.body.properties.BUS_STOP_NUM_2,
        BUS_STOP_SUB_NUM_2: req.body.properties.BUS_STOP_SUB_NUM_2,
        PLANNED_ROAD: req.body.properties.PLANNED_ROAD,
        REAL_ROAD: req.body.properties.REAL_ROAD,
        VEHICLE_NUMBER: req.body.properties.VEHICLE_NUMBER,
        VARIATION: req.body.properties.VARIATION,
        CHANGE_OF_Variation: req.body.properties.CHANGE_OF_Variation,
        Street: req.body.properties.Street,
        Order_In_Json_Id: req.body.properties.OrderInJsonId,
        Type: req.body.properties.Type,
        Current_Time: req.body.properties.Current_Time,
        Line: req.body.properties.Line,
        Trip: req.body.properties.Trip,
        Delay: req.body.properties.Delay,
        Dir: req.body.properties.Dir,
        TripTime: req.body.properties.TripTime,
        From: req.body.properties.From,
        Via: req.body.properties.Via,
        To: req.body.properties.To,
        CHANGE_OF_Delay: req.body.properties.CHANGE_OF_Delay,
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
      },
    },
    { new: true }
  );

  if (!bst)
    return res.status(404).send("The bst with the given ID was not found.");

  res.send(bst);
});

router.delete("/:id", async (req, res) => {
  const bst = await MhdPobst.findByIdAndRemove(req.params.id);

  if (!bst)
    return res.status(404).send("The bst with the given ID was not found.");

  res.send(bst);
});

router.get("/:id", async (req, res) => {
  const bst = await MhdPobst.findById(req.params.Id);
  console.log(bst);

  if (!bst)
    return res.status(404).send("The bst with the given ID was not found.");

  res.send(bst);
});

module.exports = router;
