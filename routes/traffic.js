const { Traffic, validate } = require("../models/traffic");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

let traffic = [];

//for ChangeOfVariation
router.get("/firstJSON/1", async (req, res) => {
  res.send(traffic);
});
//for ChangeOfVariation
router.post("/firstJSON/1", async (req, res) => {
  //console.log(req.body);
  traffic = req.body;
});

router.post("/", async (req, res) => {
  console.log(req.body)

 let json = Promise.resolve(req) // unhandle reject 
 let err = Promise.reject(req)

 if (err) return res.status(400).send(error);


  const { error } = validate(json.body);
  if (error) return res.status(400).send(error.details[0].message);

  let traffic = new Traffic({
    geometry: {
      type: req.body.geometry.type,
      coordinates: req.body.geometry.coordinates,
    },
    type: req.body.type,
    properties: {
      region_ID: req.body.properties.region_ID,
      region_name: req.body.properties.region_name,
      Type: req.body.properties.Type,
      Current_Time: req.body.properties.Current_Time,
      district_ID: req.body.properties.district_ID,
      district_Name: req.body.properties.district_Name,
      district_AreaLevel: req.body.properties.district_AreaLevel,
      delaySeconds: req.body.properties.delaySeconds,
      district_Parent_ID: req.body.properties.district_Parent_ID,
      district_Parent_Name: req.body.properties.district_Perent_Name,
      category_Code: req.body.properties.category_Code,
      category_Name: req.body.properties.category_Name,
      status_Code: req.body.properties.status_Code,
      status_Name: req.body.properties.status_Name,
      title: req.body.properties.title,
      description: req.body.properties.description,
      coordinatesPoly: req.body.properties.coordinatesPoly,
      typePoly: req.body.properties.typePoly,
      coordinatesMulti: req.body.properties.coordinatesMulti,
      typeMulti: req.body.properties.typeMulti,
      houseNoFirst: req.body.properties.houseNoFirst,
      houseNoSecond: req.body.properties.houseNoSecond,
    },
  });
  traffic = await traffic.save();
  res.send(req);
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const traffic = await Traffic.findByIdAndUpdate(
    req.params.id,
    {
      geometry: {
        type: req.body.geometry.type,
        coordinates: req.body.geometry.coordinates,
      },
      type: req.body.type,
      properties: {
        region_ID: req.body.properties.region_ID,
        region_name: req.body.properties.region_name,
        Type: req.body.properties.Type,
        Current_Time: req.body.properties.Current_Time,
        district_ID: req.body.properties.district_ID,
        district_Name: req.body.properties.district_Name,
        district_AreaLevel: req.body.properties.district_AreaLevel,
        delaySeconds: req.body.properties.delaySeconds,
        district_Parent_ID: req.body.properties.district_Parent_ID,
        district_Parent_Name: req.body.properties.district_Perent_Name,
        category_Code: req.body.properties.category_Code,
        category_Name: req.body.properties.category_Name,
        status_Code: req.body.properties.status_Code,
        status_Name: req.body.properties.status_Name,
        title: req.body.properties.title,
        description: req.body.properties.description,
        coordinatesPoly: req.body.properties.coordinatesPoly,
        typePoly: req.body.properties.typePoly,
        coordinatesMulti: req.body.properties.coordinatesMulti,
        typeMulti: req.body.properties.typeMulti,
        houseNoFirst: req.body.properties.houseNoFirst,
        houseNoSecond: req.body.properties.houseNoSecond,
      },
    },
    { new: true }
  );

  if (!traffic)
    return res.status(404).send("The traffic with the given ID was not found.");

  res.send(traffic);
});

router.delete("/:id", async (req, res) => {
  const traffic = await Traffic.findByIdAndRemove(req.params.id);

  if (!traffic)
    return res.status(404).send("The traffic with the given ID was not found.");

  res.send(traffic);
});

router.get("/:id", async (req, res) => {
  const traffic = await Traffic.findById(req.params.Id);
  console.log(traffic);

  if (!traffic)
    return res.status(404).send("The traffic with the given ID was not found.");

  res.send(traffic);
});

module.exports = router;
