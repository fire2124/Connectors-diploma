const Joi = require("joi");
const mongoose = require("mongoose");

const Ubian = mongoose.model(
  "Ubian",
  new mongoose.Schema({
    type: { type: String, required: false },
    geometry: {
      coordinates: {
        type: Array,
        required: false,
      },
      type: { type: String, require: false },
    },
    properties: {
      vehicleID: { type: Number, require: false },
      DELAY: { type: Number, require: false },
      lastCommunication: { type: String, require: false },
      lastStopOrder: { type: Number, require: false },
      isOnStop: { type: Boolean, require: false },
      tooltip: { type: String, require: false },
      trip: { type: Number, require: false },
      destination: { type: String, require: false },
      destinationStopName: { type: String, require: false },
      destinationCityName: { type: String, require: false },
      from: { type: String, require: false },
      via: { type: String, require: false },
      lineID: { type: Number, require: false },
      lineType: { type: Number, require: false },
      type: { type: String, require: false },
      ROUTE_NUMBER: { type: Number, require: false },
      Current_Time: { type: Number, require: false },
      Order_In_Json_Id: { type: Number, require: false },
      CHANGE_OF_DELAY: { type: Number, require: false },
      Street:{ type: String, require: false },
    },
  })
);

async function validateUbian(bus) {
  const schema = {
    type:  Joi.string().optional(),
    geometry: {
      type: Joi.string().optional(),
      coordinates: Joi.array().optional(),
    },
    properties: {
      vehicleID: Joi.number().optional(),
      DELAY: Joi.number().optional(),
      lastCommunication: Joi.string().optional(),
      lastStopOrder: Joi.number().optional(),
      isOnStop: Joi.boolean().optional(),
      tooltip: Joi.string().optional(),
      trip: Joi.number().optional(),
      destination: Joi.string().optional(),
      destinationStopName: Joi.string().optional(),
      destinationCityName: Joi.string().optional(),
      from: Joi.string().optional(),
      via: Joi.string().optional(),
      lineID: Joi.number().optional(),
      lineType: Joi.number().optional(),
      type: Joi.string().optional(),
      ROUTE_NUMBER: Joi.number().optional(),
      Current_Time: Joi.number().optional(),
      Order_In_Json_Id: Joi.number().optional(),
      CHANGE_OF_DELAY: Joi.number().optional(),
      Street:Joi.string().optional(),
    }
  };

  return Joi.validate(bus, schema);
}

exports.Ubian = Ubian;
exports.validate = validateUbian;
