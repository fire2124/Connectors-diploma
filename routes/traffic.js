const { Traffic, validate } = require("../models/traffic");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

let request = require("request");
var options = {
  method: "GET",
  url:
    "https://portal.minv.sk/wps/portal/domov/sluzby_pz/dopravne_krizove_situacie/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOJNDJxdPby8DbzcQ_2MDRwtzQJdQ4ItjCyCDYEKIoEKnN0dPUzMfQwMDEwsjAw8XZw8XMwtfQ0MPM2I02-AAzgaENIfrh-FV4m3KVQBPieCFeBxQ0FuaIRBpqciANyVKis!/dl5/d5/L2dBISEvZ0FBIS9nQSEh/pw/Z7_40CEHJK0JGUN30A96QETS828Q4/res/id=QCPgetSituations/c=cacheLevelPage/=/?regionId=0&categories=ZD6%3BZD7%3BZD8%3BZD1%3BZD2%3BZD3%3BZD5&showPlanned=false\n",
  headers: {
    Cookie: "DigestTracker=AAABcmANZNU",
  },
};

router.get("/", async (req, res) => {
  // get current trafficses

  await request(options, function (error, response, body) {
    if (error) throw new Error(error);
    const date = new Date();
    const imageDate = Date.parse(date);
    let bodyFinal = JSON.parse(body);

    let array = [];
    let arrayBefore = [];
    let count = 0;
    let time = new Date();
    let currentTime = time.getTime();
    bodyFinal = bodyFinal.situations;
    let er = 0;

    bodyFinal.forEach((element) => {
      try {
        if (
          element.region.id === 7 ||
          element.region.id === 8
        ) {
          element.Type = "Traffic";
          element.Current_Time = currentTime;
          element.district_ID = element.district.id;
          element.district_Name = element.district.name;
          element.district_AreaLevel = element.district.areaLevel;
          element.district_Parent_ID = element.district.parent.id;
          element.district_Parent_Name = element.district.parent.name;


        //district_Parent_Extent -------------------------------------------------------------
          if (element.district.parent.extent) {
            let parentExtent = JSON.parse(element.district.parent.extent);
            element.district_Parent_Extent_XMIN = parentExtent.XMIN;
            element.district_Parent_Extent_XMAX = parentExtent.XMAX;
            element.district_Parent_Extent_YMIN = parentExtent.YMIN;
            element.district_Parent_Extent_YMAX = parentExtent.YMAX;
            element.district_Parent_Extent_SpatialReference_Wkid =
              parentExtent.spatialReference.wkid;
          }

          element.category_Code = element.category.code;
          element.category_Name = element.category.name;
          element.status_Code = element.status.code;
          element.status_Name = element.status.name;

          //Location -------------------------------------------------------------
          if (element.location) {
            let loc = JSON.parse(element.location);

            //polygons
            if (loc.polygons) {
              const iterator4 = loc.polygons.values();
              //console.log("polygon" + " " + iterator4);
              for (const value4 of iterator4) {
                const iterator5 = value4.geometry.rings.values();
                for (const value5 of iterator5) {
                  element.Location_Polygons_Paths_Rings = value5;
                }
              }
            }

            //lines
            if (loc.lines) {
              const iterator6 = loc.lines.values();
              for (const value7 of iterator6) {
                const iterator8 = value7.geometry.paths.values();
                for (const value8 of iterator8) {
                  element.Location_Lines_Paths = value8;
                }
              }
            }

            //points
            if (loc.points) {
              const iterator9 = loc.points.values();
              for (const value10 of iterator9) {
                element.Location_Points_Geometry_X = value10.geometry.x;
                element.Location_Points_Geometry_Y = value10.geometry.y;
              }
            }
          }

         //AlternateRoute -------------------------------------------------------------
          if (element.alternateRoute) {
            let alt = JSON.parse(element.alternateRoute);

            //polygons
            if (alt.polygons) {
              const iterator10 = alt.polygons.values();
              for (const value11 of iterator10) {
                const iterator12 = value11.geometry.rings.values();
                for (const value12 of iterator12) {
                  element.AlternateRoute_Polygons_Geometry_Paths_Rings = value12;
                }
              }
            }

            //lines
            if (alt.lines) {
              const iterator13 = alt.lines.values();
              for (const value13 of iterator13) {
                const iterator14 = value13.geometry.paths.values();
                for (const value14 of iterator14) {
                  element.AlternateRoute_Lines_Geometry_Paths = value14;
                }
              }
            }

            //points
            if (alt.points) {
              const iterator15 = alt.points.values();
              for (const value15 of iterator15) {
                element.AlternateRoute_Points_Geometry_X = value15.geometry.x;
                element.AlternateRoute_Points_Geometry_Y = value15.geometry.y;
              }
            }
          }

        //Delete unused -------------------------------------------------------------
          delete element.alternateRoute;
          delete element.location;
          delete element.photosInfo;
          //delete element.id;
          //delete element.guid;
          delete element.region;
          delete element.district;
          delete element.category;
          delete element.status;
          array.push(element);
        }
      } catch (error) {

      }
    });

    let count2 = 0;
    let array2 = [];
    for (let zaznam of array) {
      zaznam.OrderInJsonId = ++count2;
      array2.push(zaznam);
    }
    res.send(array2);
  });

  //const traffics = await traffic.find().sort('name');
  //res.send(traffics);
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
