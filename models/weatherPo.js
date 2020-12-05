const Joi = require("joi");
const mongoose = require("mongoose");

const WeatherPO = mongoose.model(
  "WeatherPO",
  new mongoose.Schema({
    type: {
      type: String,
      required: false,
    },
    geometry: {
      type: {
        type: String,
        required: false,
      },
      coordinates: {
        type: Array,
        required: false,
      },
    },
    properties: {
      Id: {
        type: Number,
        required: false,
      },
      Type: {
        type: String,
        required: false,
      },
      Weather_Id: {
        type: Number,
        required: false,
      },
      Weather_Main: {
        type: String,
        required: false,
      },
      Weather_Description: {
        type: String,
        required: false,
      },
      Weather_Icon: {
        type: String,
        required: false,
      },
      Main_Temp: {
        type: Number,
        required: false,
      },
      Main_FeelsLike: {
        type: Number,
        required: false,
      },
      Main_TempMax: {
        type: Number,
        required: false,
      },
      Main_TempMin: {
        type: Number,
        required: false,
      },
      Main_Pressure: {
        type: Number,
        required: false,
      },
      Main_Humidity: {
        type: Number,
        required: false,
      },
      Wind_Speed: {
        type: Number,
        required: false,
      },
      Clouds_All: {
        type: Number,
        required: false,
      },
      Sunrise: {
        type: Number,
        required: false,
      },
      Sunset: {
        type: Number,
        required: false,
      },
      Current_Time: {
        type: Number,
        required: false,
      },
      Visibility: {
        type: Number,
        required: false,
      },
      Rain_1h: {
        type: Number,
        required: false,
      },
    },
  })
);

function validateWeatherPO(weather) {
  const schema = {
    type: Joi.string().optional(),
    geometry: {
      type: Joi.string().optional(),
      coordinates: Joi.array().optional(),
    },
    properties: {
      Id: Joi.number().optional(),
      Type: Joi.string().optional(),
      Weather_Id: Joi.number().optional(),
      Weather_Main: Joi.string().optional(),
      Weather_Description: Joi.string().optional(),
      Weather_Icon: Joi.string().optional(),
      Main_Temp: Joi.number().optional(),
      Main_FeelsLike: Joi.number().optional(),
      Main_TempMax: Joi.number().optional(),
      Main_TempMin: Joi.number().optional(),
      Main_Pressure: Joi.number().optional(),
      Main_Humidity: Joi.number().optional(),
      Wind_Speed: Joi.number().optional(),
      Clouds_All: Joi.number().optional(),
      Sunrise: Joi.number().optional(),
      Sunset: Joi.number().optional(),
      Current_Time: Joi.number().optional(),
      Visibility: Joi.number().optional(),
      Rain_1h: Joi.number().optional(),
    },
  };

  return Joi.validate(weather, schema);
}

exports.WeatherPO = WeatherPO;
exports.validate = validateWeatherPO;
