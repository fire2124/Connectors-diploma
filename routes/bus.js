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
  //console.log(req.body);
  busAll = req.body;
});

//postOneByOne
router.post("/", async (req, res) => {
  console.log(req.body);
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let mhdPoBus = new MhdPoBus({
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
      VARIATION: req.body.properties.VARIATION,
      CHANGE_OF_Variation: req.body.properties.CHANGE_OF_Variation,
      Street: req.body.properties.Street,
      Order_In_Json_Id: req.body.properties.OrderInJsonId,
      Type: req.body.properties.Type,
      Current_Time: req.body.properties.Current_Time,
    },
  });
  try {
    mhdPoBus = await mhdPoBus.save();
    res.send("200");
  } catch (e) {
    console.log(e)
  }
});

//Update
router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const bus = await MhdPoBus.findByIdAndUpdate(
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
        VARIATION: req.body.properties.VARIATION,
        CHANGE_OF_Variation: req.body.properties.CHANGE_OF_Variation,
        Street: req.body.properties.Street,
        Order_In_Json_Id: req.body.properties.OrderInJsonId,
        Type: req.body.properties.Type,
        Current_Time: req.body.properties.Current_Time,
      },
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
