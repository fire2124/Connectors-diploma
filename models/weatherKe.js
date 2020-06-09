const Joi = require('joi');
const mongoose = require('mongoose');

const WeatherKE = mongoose.model('WeatherKE', new mongoose.Schema({
  base: {
    type: String,
    required: true,
  },
  visibility: {
    type: Number,
    optional: true,
  },
  dt: {
    type: Number,
    required: true,
  },
  timezone: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  cod: {
    type: Number,
    required: true,
  },
  Id: {
    type: Number,
    required: true,
  },
  Type: {
    type: String,
    required: true,
  },
  CurrentTime: {
    type: Number,
    required: true,
  },
  Lat: {
    type: Number,
    required: true,
  },
  Lng: {
    type: Number,
    required: true,
  },
  Weather_Id: {
    type: Number,
    required: true,
  },
  Weather_Main: {
    type: String,
    required: true,
  },
  Weather_Description: {
    type: String,
    required: true,
  },
  Weather_Icon: {
    type: String,
    required: true,
  },
  Main_Temp:{
    type: Number,
    required:true,   
  },
  Main_FeelsLike:{
    type: Number,
    required:true,   
  },
  Main_TempMax:{
    type: Number,
    required:true,   
  },
  Main_TempMin:{
    type: Number,
    required:true,   
  },
  Main_Pressure:{
    type: Number,
    required:true,   
  },
  Main_Humidity:{
    type: Number,
    required:true,   
  },
  Wind_Speed:{
    type: Number,
    required:true,   
  },
  Clouds_All:{
    type: Number,
    required:true,   
  },
  Sunrise:{
    type: Number,
    required:true,   
  },
  Sunset:{
    type: Number,
    required:true,   
  },
  Rain_1h:{
    type: Number,
    optional: true,
  },
}));

function validateWeatherKe(weather) {
  const schema = {
    base: Joi.string().required(),
    visibility: Joi.number().optional(),
    dt: Joi.number().required(),
    timezone: Joi.number().required(),
    name: Joi.string().required(),
    cod: Joi.number().required(),
    Id: Joi.number().required(),
    Type: Joi.string().required(),
    CurrentTime: Joi.number().required(),
    Lat: Joi.number().required(),
    Lng: Joi.number().required(),
    Weather_Id: Joi.number().required(),
    Weather_Main: Joi.string().required(),
    Weather_Description: Joi.string().required(),
    Weather_Icon: Joi.string().required(),
    Main_Temp:Joi.number().required(),
    Main_FeelsLike: Joi.number().required(),
    Main_TempMax: Joi.number().required(),
    Main_TempMin: Joi.number().required(),
    Main_Pressure: Joi.number().required(),
    Main_Humidity: Joi.number().required(),
    Wind_Speed: Joi.number().required(),
    Clouds_All: Joi.number().required(),
    Sunrise: Joi.number().required(),
    Sunset: Joi.number().required(),
    Rain_1h: Joi.number().optional(),
  };

  return Joi.validate(weather, schema);
}

exports.WeatherKE = WeatherKE; 
exports.validate = validateWeatherKe;