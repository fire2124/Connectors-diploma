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
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  let traffic = new Traffic({ 
    id: req.body.id,
    guid: req.body.guid,
    source: req.body.source,
    title: req.body.title,
    description: req.body.description,
    delayMinutes: req.body.delayMinutes,
    validFrom: req.body.validFrom,
    validTo: req.body.validTo,
    createdAt: req.body.createdAt,
    changedAt: req.body.changedAt,
    dbUpdate: req.body.dbUpdate,
    city: req.body.city,
    street: req.body.street,
    houseNoFirst: req.body.houseNoFirst,
    houseNoSecond: req.body.houseNoSecond,
    Type: req.body.Type,
    Current_Time: req.body.Current_Time,
    district_ID: req.body.district_ID,
    district_Name: req.body.district_Name,
    district_AreaLevel: req.body.district_AreaLevel,
    district_Parent_ID: req.body.district_Parent_ID,
    district_Parent_Name: req.body.district_Parent_Name,
    district_Parent_Extent_XMIN: req.body.district_Parent_Extent_XMIN,
    district_Parent_Extent_XMAX: req.body.district_Parent_Extent_XMAX,
    district_Parent_Extent_YMIN: req.body.district_Parent_Extent_YMIN,
    district_Parent_Extent_YMAX: req.body.district_Parent_Extent_YMAX,
    district_Parent_Extent_SpatialReference_Wkid: req.body.district_Parent_Extent_SpatialReference_Wkid,
    category_Code: req.body.category_Code,
    category_Name: req.body.category_Name,
    status_Code: req.body.status_Code,
    status_Name: req.body.status_Name,
    Location_Lines_Paths: req.body.Location_Lines_Paths,
    Location_Polygons_Paths_Rings: req.body.Location_Polygons_Paths_Rings,
    Location_Points_Geometry_X: req.body.Location_Points_Geometry_X,
    Location_Points_Geometry_Y: req.body.Location_Points_Geometry_Y,
    AlternateRoute_Lines_Geometry_Paths: req.body.AlternateRoute_Lines_Geometry_Paths,
    AlternateRoute_Points_Geometry_X: req.body.AlternateRoute_Points_Geometry_X,
    AlternateRoute_Points_Geometry_Y: req.body.AlternateRoute_Points_Geometry_Y,
    alternateRouteDesc: req.body.alternateRouteDesc,
    OrderInJsonId: req.body.OrderInJsonId,
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
        id: reg.body.id,
        guid: reg.body.guid,
        source: reg.body.source,
        title: reg.body.title,
        description: reg.body.description,
        delayMinutes: reg.body.delayMinutes,
        validFrom: reg.body.validFrom,
        validTo: reg.body.validTo,
        createdAt: reg.body.createdAt,
        changedAt: reg.body.changedAt,
        dbUpdate: reg.body.dbUpdate,
        city: reg.body.city,
        street: reg.body.street,
        houseNoFirst: req.body.houseNoFirst,
        houseNoSecond: req.body.houseNoSecond,
        Type: reg.body.Type,
        Current_Time: reg.body.Current_Time,
        district_ID: reg.body.district_ID,
        district_Name: reg.body.district_Name,
        district_AreaLevel: reg.body.district_AreaLevel,
        district_Parent_ID: reg.body.district_Parent_ID,
        district_Parent_Name: reg.body.district_Parent_Name,
        district_Parent_Extent_XMIN: reg.body.district_Parent_Extent_XMIN,
        district_Parent_Extent_XMAX: reg.body.district_Parent_Extent_XMAX,
        district_Parent_Extent_YMIN: reg.body.district_Parent_Extent_YMIN,
        district_Parent_Extent_YMAX: reg.body.district_Parent_Extent_YMAX,
        district_Parent_Extent_SpatialReference_Wkid: reg.body.district_Parent_Extent_SpatialReference_Wkid,
        category_Code: reg.body.category_Code,
        category_Name: reg.body.category_Name,
        status_Code: reg.body.status_Code,
        status_Name: reg.body.status_Name,
        Location_Lines_Paths: reg.body.Location_Lines_Paths,
        Location_Polygons_Paths_Rings: reg.body.Location_Polygons_Paths_Rings,
        Location_Points_Geometry_X: reg.body.Location_Points_Geometry_X,
        Location_Points_Geometry_Y: reg.body.Location_Points_Geometry_Y,
        AlternateRoute_Lines_Geometry_Paths: reg.body.AlternateRoute_Lines_Geometry_Paths,
        AlternateRoute_Points_Geometry_X: reg.body.AlternateRoute_Points_Geometry_X,
        AlternateRoute_Points_Geometry_Y: reg.body.AlternateRoute_Points_Geometry_Y,
        OrderInJsonId: reg.body.OrderInJsonId,
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
