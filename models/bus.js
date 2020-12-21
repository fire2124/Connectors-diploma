const Joi = require("joi");
const mongoose = require("mongoose");

const MhdPoBus = mongoose.model(
  "MhdPoBus",
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
      ROUTE_NUMBER: {
        type: String,
        optional: false
      },
      PLANNED_START: {
        type: String,
        required: false,
      },
      DIRECTION: {
        type: String,
        required: false,
      },
      BUS_STOP_ORDER_NUM: {
        type: Number,
        required: false,
      },
      BUS_STOP_NAME_1: {
        type: String,
        required: false,
      },
      BUS_STOP_NUM_1: {
        type: Number,
        required: false,
      },
      BUS_STOP_SUB_NUM_1: {
        type: Number,
        required: false,
      },
      BUS_STOP_NAME_2: {
        type: String,
        required: false,
      },
      BUS_STOP_NUM_2: {
        type: Number,
        required: false,
      },
      BUS_STOP_SUB_NUM_2: {
        type: Number,
        required: false,
      },
      PLANNED_ROAD: {
        type: Number,
        required: false,
      },
      REAL_ROAD: {
        type: Number,
        required: false,
      },
      VARIATION: {
        type: Number,
        required: false,
      },
      CHANGE_OF_Variation: {
        type: Number,
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
      VEHICLE_NUMBER:{
        type: Number,
        required: false,
      },
    },
  })
);

function validateBus(bus) {
  const schema = {
    properties: {
      ROUTE_NUMBER: Joi.optional(),
      PLANNED_START: Joi.string().optional(),
      DIRECTION: Joi.string().optional(),
      BUS_STOP_ORDER_NUM: Joi.number().optional(),
      BUS_STOP_NAME_1: Joi.string().optional(),
      BUS_STOP_NUM_1: Joi.number().optional(),
      BUS_STOP_SUB_NUM_1: Joi.number().optional(),
      BUS_STOP_NAME_2: Joi.string().optional(),
      BUS_STOP_NUM_2: Joi.number().optional(),
      BUS_STOP_SUB_NUM_2: Joi.number().optional(),
      PLANNED_ROAD: Joi.number().optional(),
      REAL_ROAD: Joi.number().optional(),
      VARIATION: Joi.number().optional(),
      Order_In_Json_Id: Joi.number().optional(),
      Type: Joi.string().optional(),
      Current_Time: Joi.number().optional(),
      CHANGE_OF_Variation: Joi.number().optional(),
      Street: Joi.string().optional(),
      VEHICLE_NUMBER:Joi.number().optional(),
    },
    geometry: {
      type: Joi.string().optional(),
      coordinates: Joi.array().optional(),
    },
    type: Joi.string().optional(),
  };

  return Joi.validate(bus, schema);
}

exports.MhdPoBus = MhdPoBus;
exports.validate = validateBus;
