const Joi = require("joi");
const mongoose = require("mongoose");

const BST = mongoose.model(
  "BST",
  new mongoose.Schema({
    type: {
      type: String,
      required: false
    },
    geometry: {
      type: {
        type: String,
        required: false
      },
      coordinates: {
        type: Array,
        required: false
      },
    },
    properties: {
      ROUTE_NUMBER: {type: String,required: false},
      PLANNED_START: {type: String,required: false},
      DIRECTION: {type: String,required: false},
      BUS_STOP_ORDER_NUM: {type: Number,required: false},
      BUS_STOP_NAME_1: {type: String,required: false},
      BUS_STOP_NUM_1: {type: Number,required: false},
      BUS_STOP_SUB_NUM_1: {type: Number,required: false},
      BUS_STOP_NAME_2: {type: String,required: false},
      BUS_STOP_NUM_2: {type: Number,required: false},
      BUS_STOP_SUB_NUM_2: {type: Number,required: false},
      PLANNED_ROAD: {type: Number,required: false},
      REAL_ROAD: {type: Number,required: false},
      DELAY: {type: Number,required: false},
      CHANGE_OF_DELAY: {type: Number,required: false},
      Street: {type: String,required: false},
      Order_In_Json_Id: {type: Number,required: false},
      Type: {type: String,required: false},
      VEHICLE_NUMBER: {type: Number,required: false},
      Trip: {type: Number,required: false},
      Dir: {type: Number,required: false},
      TripTime: {type: Number,required: false},
      From: {type: String,required: false},
      Via: {type: String,required: false},
      To: {type: String,required: false},
      Nazov: {type: String,required: false},
      MeskaText: {type: String,required: false},
      Current_Stop: {type: String,required: false},
      Dopravca: {type: String,required: false},
      Angle: {type: Number,required: false},
      Order_In_Station: {type: Number,required: false},
      PotvrdenyOdj: {type: Boolean,required: false},
      CasDay: {type: String,required: false},
      CasTime: {type: String,required: false},
      CasPlanDay: {type: String,required: false},
      CasPlanTime: {type: String,required: false},
      Current_Time: {type: Number, required: false},
      vehicleID: { type: Number, required: false },
      lastStopOrder: { type: Number, required: false },
      isOnStop: { type: Boolean, required: false },
      destination: { type: String, required: false },
      destinationStopName: { type: String, required: false },
      destinationCityName: { type: String, required: false },
      lineID: { type: Number, required: false },
      lineType: { type: Number, required: false },
      lineNumber: { type: Number, required: false },
    },
  })
);

function validateBst(bus) {
  const schema = {
    type: Joi.string().optional(),
    geometry: {
      type: Joi.string().optional(),
      coordinates: Joi.array().optional(),
    },
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
      DELAY: Joi.number().optional(),
      Order_In_Json_Id: Joi.number().optional(),
      CHANGE_OF_DELAY: Joi.number().optional(),
      Street: Joi.string().optional(),
      VEHICLE_NUMBER: Joi.number().optional(),
      Trip: Joi.number().optional(),
      Dir: Joi.number().optional(),
      TripTime: Joi.number().optional(),
      From: Joi.string().optional(),
      Via: Joi.string().optional(),
      To: Joi.string().optional(),
      Nazov: Joi.string().optional(),
      MeskaText: Joi.string().optional(),
      Current_Stop: Joi.string().optional(),
      Dopravca: Joi.string().optional(),
      Angle: Joi.number().optional(),
      Order_In_Station: Joi.number().optional(),
      PotvrdenyOdj: Joi.boolean().optional(),
      CasDay: Joi.string().optional(),
      CasTime: Joi.string().optional(),
      CasPlanDay: Joi.string().optional(),
      CasPlanTime: Joi.string().optional(),
      Type: Joi.string().optional(),
      Current_Time: Joi.number().optional(),
      vehicleID: Joi.number().optional(),
      lastStopOrder: Joi.number().optional(),
      isOnStop: Joi.boolean().optional(),
      destination: Joi.string().optional(),
      destinationStopName: Joi.string().optional(),
      destinationCityName: Joi.string().optional(),
      lineID: Joi.number().optional(),
      lineType: Joi.number().optional(),
      lineNumber: Joi.number().optional(),
    },
  };

  return Joi.validate(bus, schema);
}

exports.BST = BST;
exports.validate = validateBst;
