const { WeatherKE, validate } = require("../models/weatherKe");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

let weather = [];


router.get("/firstJSON/1", async (req, res) => {
  res.send(weather);
});

router.post("/firstJSON/1", async (req, res) => {
  weather = req.body;
  //console.log(weather);
  res.status(201).send("created");
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  console.log(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let weatherKe = new WeatherKE({
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
  weatherKe = await weatherKe.save();
  res.status(201).send("created");
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const weatherKe = await WeatherKE.findByIdAndUpdate(
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
      },
    },
    { new: true }
  );

  if (!weatherKe)
    return res
      .status(404)
      .send("The WeatherKE with the given ID was not found.");

  res.send(weatherKe);
});

router.delete("/:id", async (req, res) => {
  const weatherKe = await WeatherKE.findByIdAndRemove(req.params.id);

  if (!weatherKe)
    return res
      .status(404)
      .send("The WeatherKE with the given ID was not found.");

  res.send(weatherKe);
});

router.get("/:id", async (req, res) => {
  const weatherKe = await WeatherKE.findById(req.params.Id);
  console.log(weatherKe);

  if (!weatherKe)
    return res
      .status(404)
      .send("The WeatherKE with the given ID was not found.");

  res.send(weatherKe);
});

module.exports = router;
