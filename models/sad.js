const Joi = require("joi");
const mongoose = require("mongoose");

const SadPoBus = mongoose.model(
  "SadPoBus",
  new mongoose.Schema({
    type: { type: String, required: false },
    geometry: {
      type: { type: String, require: false },
      coordinates: {
        type: Array,
        required: false,
      },   
    },
    properties: {
      Line: {
        type: String,
        required: false,
      },
      Trip: {
        type: Number,
        required: false,
      },
      Delay: {
        type: Number,
        required: false,
      },
      Dir: {
        type: Number,
        required: false,
      },
      TripTime: {
        type: Number,
        required: false,
      },
      From: {
        type: String,
        required: false,
      },
      Via: {
        type: String,
        required: false,
      },
      To: {
        type: String,
        required: false,
      },
      Street: {
        type: String,
        required: false,
      },
      Order_In_Json_Id: {
        type: Number,
        required: false,
      },
      Type: {
        type: String,
        required: false,
      },
      Current_Time: {
        type: Number,
        required: false,
      },
      CHANGE_OF_Delay: {
        type: Number,
        required: false,
      },
    },
  })
);

function validateSadPoBus(bus) {
  const schema = {
    type: Joi.string().optional(),
    geometry: {
      type: Joi.string().optional(),
      coordinates: Joi.array().optional(),
    },
    properties: {
      Line: Joi.string().optional(),
      Trip: Joi.number().optional(),
      Delay: Joi.number().optional(),
      Dir: Joi.number().optional(),
      TripTime: Joi.number().optional(),
      From: Joi.string().optional(),
      Via: Joi.string().optional(),
      To: Joi.string().optional(),
      Street:Joi.string().optional(),
      Order_In_Json_Id: Joi.number().optional(),
      Type: Joi.string().optional(),
      Current_Time: Joi.number().optional(),
      CHANGE_OF_Delay: Joi.number().optional(),
    },
  };

  return Joi.validate(bus, schema);
}

exports.SadPoBus = SadPoBus;
exports.validate = validateSadPoBus;
