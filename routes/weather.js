const { Weather, validate } = require("../models/weather");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();



router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  console.log(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let weather = new Weather({
    type: req.body.type,
    geometry: {
      type: req.body.geometry.type,
      coordinates: req.body.geometry.coordinates,
    },
    properties: {
      Id: req.body.properties.Id,
      Type: req.body.properties.Type,
      Weather_Id: req.body.properties.Weather_Id,
      Weather_Main: req.body.properties.Weather_Main,
      Weather_Description: req.body.properties.Weather_Description,
      Weather_Icon: req.body.properties.Weather_Icon,
      Main_Temp: req.body.properties.Main_Temp,
      Main_FeelsLike: req.body.properties.Main_FeelsLike,
      Main_TempMax: req.body.properties.Main_TempMax,
      Main_TempMin: req.body.properties.Main_TempMin,
      Main_Pressure: req.body.properties.Main_Pressure,
      Main_Humidity: req.body.properties.Main_Humidity,
      Wind_Speed: req.body.properties.Wind_Speed,
      Wind_Deg:  req.body.properties.Wind_Deg,
      Clouds_All: req.body.properties.Clouds_All,
      Sunrise: req.body.properties.Sunrise,
      Sunset: req.body.properties.Sunset,
      Current_Time: req.body.properties.Current_Time,
      Rain_1h: req.body.properties.Rain_1h,
      Visibility: req.body.properties.Visibility,
    },
  });
  weather = await weather.save();
  res.status(201).send("created");
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const weather = await Weather.findByIdAndUpdate(
    req.params.id,
    {
      type: req.body.type,
      geometry: {
        type: req.body.geometry.type,
        coordinates: req.body.geometry.coordinates,
      },
      properties: {
        Id: req.body.geometry.properties.Id,
        Type: req.body.properties.Type,
        Weather_Id: req.body.properties.Weather_Id,
        Weather_Main: req.body.properties.Weather_Main,
        Weather_Description: req.body.properties.Weather_Description,
        Weather_Icon: req.body.properties.Weather_Icon,
        Main_Temp: req.body.properties.Main_Temp,
        Main_FeelsLi: req.body.properties.Main_FeelsLi,
        Main_TempMax: req.body.properties.Main_TempMax,
        Main_TempMin: req.body.properties.Main_TempMin,
        Main_Pressure: req.body.properties.Main_Pressure,
        Main_Humidity: req.body.properties.Main_Humidity,
        Wind_Speed: req.body.properties.Wind_Speed,
        Wind_Deg:  req.body.properties.Wind_Deg,
        Clouds_All: req.body.properties.Clouds_All,
        Sunrise: req.body.properties.Sunrise,
        Sunset: req.body.properties.Sunset,
        Current_Time: req.body.properties.Current_Time,
        Rain_1h: req.body.properties.Rain_1h,
      },
    },
    { new: true }
  );

  if (!weather)
    return res
      .status(404)
      .send("The Weather with the given ID was not found.");

  res.send(weather);
});

router.delete("/:id", async (req, res) => {
  const weather = await Weather.findByIdAndRemove(req.params.id);

  if (!weather)
    return res
      .status(404)
      .send("The Weather with the given ID was not found.");

  res.send(weather);
});

router.get("/:id", async (req, res) => {
  const weather = await Weather.findById(req.params.Id);
  console.log(weather);

  if (!weather)
    return res
      .status(404)
      .send("The Weather with the given ID was not found.");

  res.send(weather);
});

module.exports = router;
