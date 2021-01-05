const { BST, validate } = require("../models/bst");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

//postOneByOne
router.post("/", async (req, res) => {
  console.log(req.body);
  const { error } = validate(req.body);
  if (error) {
    console.log(error.details[0].message);
    return res.status(400).send(error.details[0].message);
  }
  
  let bst = new BST({
    type: req.body.type,
    geometry: {
      type: req.body.geometry.type,
      coordinates: req.body.geometry.coordinates,
    },
    properties: {
      ROUTE_NUMBER: req.body.properties.ROUTE_NUMBER ? req.body.properties.ROUTE_NUMBER : null,
        PLANNED_START: req.body.properties.PLANNED_START ? req.body.properties.PLANNED_START : null,
        DIRECTION: req.body.properties.DIRECTION ? req.body.properties.DIRECTION : null,
        BUS_STOP_ORDER_NUM: req.body.properties.BUS_STOP_ORDER_NUM ? req.body.properties.BUS_STOP_ORDER_NUM : null,
        BUS_STOP_NAME_1: req.body.properties.BUS_STOP_NAME_1 ? req.body.properties.BUS_STOP_NAME_1 : null,
        BUS_STOP_NUM_1: req.body.properties.BUS_STOP_NUM_1 ? req.body.properties.BUS_STOP_NUM_1 : null,
        BUS_STOP_SUB_NUM_1: req.body.properties.BUS_STOP_SUB_NUM_1 ? req.body.properties.BUS_STOP_SUB_NUM_1 : null,
        BUS_STOP_NAME_2: req.body.properties.BUS_STOP_NAME_2 ? req.body.properties.BUS_STOP_NAME_2 : null,
        BUS_STOP_NUM_2: req.body.properties.BUS_STOP_NUM_2 ? req.body.properties.BUS_STOP_NUM_2 : null,
        BUS_STOP_SUB_NUM_2: req.body.properties.BUS_STOP_SUB_NUM_2 ? req.body.properties.BUS_STOP_SUB_NUM_2 : null,
        PLANNED_ROAD: req.body.properties.PLANNED_ROAD ? req.body.properties.PLANNED_ROAD : null,
        REAL_ROAD: req.body.properties.REAL_ROAD ? req.body.properties.REAL_ROAD : null,
        VEHICLE_NUMBER: req.body.properties.VEHICLE_NUMBER ? req.body.properties.VEHICLE_NUMBER : null,
        DELAY: req.body.properties.DELAY ? req.body.properties.DELAY : null,
        CHANGE_OF_DELAY: req.body.properties.CHANGE_OF_DELAY ? req.body.properties.CHANGE_OF_DELAY : null,
        Street: req.body.properties.Street ? req.body.properties.Street : null,
        Order_In_Json_Id: req.body.properties.Order_In_Json_Id ? req.body.properties.Order_In_Json_Id : null,
        Type: req.body.properties.Type ? req.body.properties.Type : null,
        Current_Time: req.body.properties.Current_Time ? req.body.properties.Current_Time : null,
        Trip: req.body.properties.Trip ? req.body.properties.Trip : null,
        Dir: req.body.properties.Dir ? req.body.properties.Dir : null,
        TripTime: req.body.properties.TripTime ? req.body.properties.TripTime : null,
        From: req.body.properties.From ? req.body.properties.From : null,
        Via: req.body.properties.Via ? req.body.properties.Via : null,
        To: req.body.properties.To ? req.body.properties.To : null,
        Nazov: req.body.properties.Nazov ? req.body.properties.Nazov : null,
        MeskaText: req.body.properties.MeskaText ? req.body.properties.MeskaText : null,
        Current_Stop: req.body.properties.Current_Stop ? req.body.properties.Current_Stop : null,
        Dopravca: req.body.properties.Dopravca ? req.body.properties.Dopravca : null,
        Angle: req.body.properties.Angle ? req.body.properties.Angle : null,
        Order_In_Station: req.body.properties.Order_In_Station ? req.body.properties.Order_In_Station : null,
        PotvrdenyOdj: req.body.properties.PotvrdenyOdj ? req.body.properties.PotvrdenyOdj : null,
        CasDay: req.body.properties.CasDay ? req.body.properties.CasDay : null,
        CasTime: req.body.properties.CasTime ? req.body.properties.CasTime : null,
        CasPlanDay: req.body.properties.CasPlanDay ? req.body.properties.CasPlanDay : null,
        CasPlanTime: req.body.properties.CasPlanTime ? req.body.properties.CasPlanTime : null,
        vehicleID: req.body.properties.vehicleID ? req.body.properties.vehicleID : null,
        lastStopOrder: req.body.properties.lastStopOrder ? req.body.properties.lastStopOrder : null,
        isOnStop: req.body.properties.isOnStop ? req.body.properties.isOnStop : null,
        destination: req.body.properties.destination ? req.body.properties.destination : null,
        destinationStopName: req.body.properties.destinationStopName ? req.body.properties.destinationStopName : null,
        destinationCityName: req.body.properties.destinationCityName ? req.body.properties.destinationCityName : null,
        lineID: req.body.properties.lineID ? req.body.properties.lineID : null,
        lineType: req.body.properties.lineType ? req.body.properties.lineType : null,
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
        ROUTE_NUMBER: req.body.properties.ROUTE_NUMBER ? req.body.properties.ROUTE_NUMBER : null,
        PLANNED_START: req.body.properties.PLANNED_START ? req.body.properties.PLANNED_START : null,
        DIRECTION: req.body.properties.DIRECTION ? req.body.properties.DIRECTION : null,
        BUS_STOP_ORDER_NUM: req.body.properties.BUS_STOP_ORDER_NUM ? req.body.properties.BUS_STOP_ORDER_NUM : null,
        BUS_STOP_NAME_1: req.body.properties.BUS_STOP_NAME_1 ? req.body.properties.BUS_STOP_NAME_1 : null,
        BUS_STOP_NUM_1: req.body.properties.BUS_STOP_NUM_1 ? req.body.properties.BUS_STOP_NUM_1 : null,
        BUS_STOP_SUB_NUM_1: req.body.properties.BUS_STOP_SUB_NUM_1 ? req.body.properties.BUS_STOP_SUB_NUM_1 : null,
        BUS_STOP_NAME_2: req.body.properties.BUS_STOP_NAME_2 ? req.body.properties.BUS_STOP_NAME_2 : null,
        BUS_STOP_NUM_2: req.body.properties.BUS_STOP_NUM_2 ? req.body.properties.BUS_STOP_NUM_2 : null,
        BUS_STOP_SUB_NUM_2: req.body.properties.BUS_STOP_SUB_NUM_2 ? req.body.properties.BUS_STOP_SUB_NUM_2 : null,
        PLANNED_ROAD: req.body.properties.PLANNED_ROAD ? req.body.properties.PLANNED_ROAD : null,
        REAL_ROAD: req.body.properties.REAL_ROAD ? req.body.properties.REAL_ROAD : null,
        VEHICLE_NUMBER: req.body.properties.VEHICLE_NUMBER ? req.body.properties.VEHICLE_NUMBER : null,
        DELAY: req.body.properties.DELAY ? req.body.properties.DELAY : null,
        CHANGE_OF_DELAY: req.body.properties.CHANGE_OF_DELAY ? req.body.properties.CHANGE_OF_DELAY : null,
        Street: req.body.properties.Street ? req.body.properties.Street : null,
        Order_In_Json_Id: req.body.properties.Order_In_Json_Id ? req.body.properties.Order_In_Json_Id : null,
        Type: req.body.properties.Type ? req.body.properties.Type : null,
        Current_Time: req.body.properties.Current_Time ? req.body.properties.Current_Time : null,
        Trip: req.body.properties.Trip ? req.body.properties.Trip : null,
        Dir: req.body.properties.Dir ? req.body.properties.Dir : null,
        TripTime: req.body.properties.TripTime ? req.body.properties.TripTime : null,
        From: req.body.properties.From ? req.body.properties.From : null,
        Via: req.body.properties.Via ? req.body.properties.Via : null,
        To: req.body.properties.To ? req.body.properties.To : null,
        Nazov: req.body.properties.Nazov ? req.body.properties.Nazov : null,
        MeskaText: req.body.properties.MeskaText ? req.body.properties.MeskaText : null,
        Current_Stop: req.body.properties.Current_Stop ? req.body.properties.Current_Stop : null,
        Dopravca: req.body.properties.Dopravca ? req.body.properties.Dopravca : null,
        Angle: req.body.properties.Angle ? req.body.properties.Angle : null,
        Order_In_Station: req.body.properties.Order_In_Station ? req.body.properties.Order_In_Station : null,
        PotvrdenyOdj: req.body.properties.PotvrdenyOdj ? req.body.properties.PotvrdenyOdj : null,
        CasDay: req.body.properties.CasDay ? req.body.properties.CasDay : null,
        CasTime: req.body.properties.CasTime ? req.body.properties.CasTime : null,
        CasPlanDay: req.body.properties.CasPlanDay ? req.body.properties.CasPlanDay : null,
        CasPlanTime: req.body.properties.CasPlanTime ? req.body.properties.CasPlanTime : null,
        vehicleID: req.body.properties.vehicleID ? req.body.properties.vehicleID : null,
        lastStopOrder: req.body.properties.lastStopOrder ? req.body.properties.lastStopOrder : null,
        isOnStop: req.body.properties.isOnStop ? req.body.properties.isOnStop : null,
        destination: req.body.properties.destination ? req.body.properties.destination : null,
        destinationStopName: req.body.properties.destinationStopName ? req.body.properties.destinationStopName : null,
        destinationCityName: req.body.properties.destinationCityName ? req.body.properties.destinationCityName : null,
        lineID: req.body.properties.lineID ? req.body.properties.lineID : null,
        lineType: req.body.properties.lineType ? req.body.properties.lineType : null,
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
