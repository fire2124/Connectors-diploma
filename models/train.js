const Joi = require("joi");
const mongoose = require("mongoose");

const Train = mongoose.model(
  "Train",
  new mongoose.Schema({
    type: {
      type: String,
      required: false,
    },
    geometry: {
      coordinates: {
        type: Array,
        required: false,
      },
      type: {
        type: String,
        required: false,
      },
    },
    properties: {
      Nazov: {
        type: String,
        required: false,
      },
      Meska: {
        type: Number,
        required: false,
      },
      MeskaText: {
        type: String,
        required: false,
      },
      Current_Stop: {
        type: String,
        required: false,
      },
      Dopravca: {
        type: String,
        required: false,
      },
      Angle: {
        type: Number,
        required: false,
      },
      Order_In_Station: {
        type: Number,
        required: false,
      },
      PotvrdenyOdj: {
        type: Boolean,
        required: false,
      },
      CasDay: {
        type: String,
        required: false,
      },
      CasTime: {
        type: String,
        required: false,
      },
      CasPlanDay: {
        type: String,
        required: false,
      },
      CasPlanTime: {
        type: String,
        required: false,
      },
      From: {
        type: String,
        required: false,
      },
      To: {
        type: String,
        required: false,
      },
      Current_Time: {
        type: Number,
        required: false,
      },
      Type: {
        type: String,
        required: false,
      },
      Order_In_JsonId: {
        type: Number,
        required: false,
      },
      CHANGE_OF_Variation: {
        type: Number,
        required: false,
      },
    },
  })
);

function validateTrain(train) {
  const schema = {
    type: Joi.string().optional(),
    geometry: {
      coordinates: Joi.array().optional(),
      type: Joi.string().optional(),
    },
    properties: {
      Nazov: Joi.string().optional(),
      Meska: Joi.number().optional(),
      MeskaText: Joi.string().optional(),
      Current_Stop: Joi.string().optional(),
      Dopravca: Joi.string().optional(),
      Angle: Joi.number().optional(),
      Order_In_Station: Joi.number().optional(),
      PotvrdenyOdj: Joi.boolean().optional(),
      CasDay: Joi.string().optional(),
      CasTime:Joi.string().optional(),
      CasPlanDay: Joi.string().optional(),
      CasPlanTime: Joi.string().optional(),
      From: Joi.string().optional(),
      To: Joi.string().optional(),
      Current_Time: Joi.number().optional(),
      Type: Joi.string().optional(),
      Order_In_JsonId: Joi.number().optional(),
      CHANGE_OF_Variation: Joi.number().optional(),
    },
  };

  return Joi.validate(train, schema);
}

exports.Train = Train;
exports.validate = validateTrain;
