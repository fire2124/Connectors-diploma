const { WeatherKE, validate } = require("../models/weatherKe");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

let request = require("request");
let options = {
  method: "GET",
  url:
    "https://openweathermap.org/data/2.5/weather?id=724443&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02\n",
  headers: {},
};

router.get("/", async (req, res) => {
  // get current weatherKE

  await request(options, function (error, response, body) {
    if (error) throw new Error(error);
    const date = new Date();
    const imageDate = Date.parse(date);
    let array = [];
    let globalObject = JSON.parse(body);
    let time = new Date();
    let currentTime = time.getTime();
    let count = 0;
    delete globalObject.id;
    globalObject.Id = ++count;
    globalObject.Type = "WeatherKE";
    globalObject.CurrentTime = currentTime;
    globalObject.Lat = globalObject.coord.lat;
    globalObject.Lng = globalObject.coord.lon;
    delete globalObject.coord;
    const iterator = globalObject.weather.values();
    for (const value of iterator) {
      globalObject.Weather_Id = value.id;
      globalObject.Weather_Main = value.main;
      globalObject.Weather_Description = value.description;
      globalObject.Weather_Icon = value.icon;
    }
    delete globalObject.weather;
    globalObject.Main_Temp = globalObject.main.temp;
    globalObject.Main_FeelsLike = globalObject.main.feels_like;
    globalObject.Main_TempMax = globalObject.main.temp_max;
    globalObject.Main_TempMin = globalObject.main.temp_min;
    globalObject.Main_Pressure = globalObject.main.pressure;
    globalObject.Main_Humidity = globalObject.main.humidity;
    delete globalObject.main;
    globalObject.Wind_Speed = globalObject.wind.speed;
    globalObject.Wind_Speed = globalObject.wind.deg;
    delete globalObject.wind;
    globalObject.Clouds_All = globalObject.clouds.all;
    delete globalObject.clouds;
    globalObject.Sunrise = globalObject.sys.sunrise;
    globalObject.Sunset = globalObject.sys.sunset;
    delete globalObject.sys;
    let sth = {};
    sth = globalObject.rain;
    try {
      globalObject.Rain_1h = globalObject.rain["1h"];
      delete globalObject.rain;
    } catch (error) {}
    res.send(globalObject);
  });

  //const weatherKes = await weatherKe.find().sort('name');
  //res.send(weatherKes);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  let weatherKe = new WeatherKE({ 
    base: req.body.base,
    visibility: req.body.visibility,
    dt: req.body.dt,
    timezone: req.body.timezone,
    name: req.body.name,
    cod: req.body.cod,
    Id: req.body.Id,
    Type: req.body.Type,
    CurrentTime: req.body.CurrentTime,
    Lat: req.body.Lat,
    Lng: req.body.Lng,
    Weather_Id: req.body.Weather_Id,
    Weather_Main: req.body.Weather_Main,
    Weather_Description: req.body.Weather_Description,
    Weather_Icon: req.body.Weather_Icon,
    Main_Temp: req.body.Main_Temp,
    Main_FeelsLike: req.body.Main_FeelsLike,
    Main_TempMax: req.body.Main_TempMax,
    Main_TempMin: req.body.Main_TempMin,
    Main_Pressure: req.body.Main_Pressure,
    Main_Humidity: req.body.Main_Humidity,
    Wind_Speed: req.body.Wind_Speed,
    Clouds_All: req.body.Clouds_All,
    Sunrise: req.body.Sunrise,
    Sunset: req.body.Sunset,
    Rain_1h: req.body.Rain_1h,
  });
    weatherKe = await weatherKe.save();
    res.send(req);
  });


router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const weatherKe = await WeatherKE.findByIdAndUpdate(
    req.params.id,
    {
        base: req.body.base,
        visibility: req.body.visibility,
        dt: req.body.dt,
        timezone: req.body.timezone,
        name: req.body.name,
        cod: req.body.cod,
        Id: req.body.Id,
        Type: req.body.Type,
        CurrentTime: req.body.CurrentTime,
        Lat: req.body.Lat,
        Lng: req.body.Lng,
        Weather_Id: req.body.Weather_Id,
        Weather_Main: req.body.Weather_Main,
        Weather_Description: req.body.Weather_Description,
        Weather_Icon: req.body.Weather_Icon,
        Main_Temp: req.body.Main_Temp,
        Main_FeelsLike: req.body.Main_FeelsLike,
        Main_TempMax: req.body.Main_TempMax,
        Main_TempMin: req.body.Main_TempMin,
        Main_Pressure: req.body.Main_Pressure,
        Main_Humidity: req.body.Main_Humidity,
        Wind_Speed: req.body.Wind_Speed,
        Clouds_All: req.body.Clouds_All,
        Sunrise: req.body.Sunrise,
        Sunset: req.body.Sunset,
        Rain_1h: req.body.Rain_1h,
    },
    { new: true }
  );

  if (!weatherKe)
    return res.status(404).send("The WeatherKE with the given ID was not found.");

  res.send(weatherKe);
});

router.delete("/:id", async (req, res) => {
  const weatherKe = await WeatherKE.findByIdAndRemove(req.params.id);

  if (!weatherKe)
    return res.status(404).send("The WeatherKE with the given ID was not found.");

  res.send(weatherKe);
});

router.get("/:id", async (req, res) => {
  const weatherKe = await WeatherKE.findById(req.params.Id);
  console.log(weatherKe);

  if (!weatherKe)
    return res.status(404).send("The WeatherKE with the given ID was not found.");

 
  res.send(weatherKe);
});

module.exports = router;
