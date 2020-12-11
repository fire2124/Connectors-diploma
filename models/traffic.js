const Joi = require("joi");
const mongoose = require("mongoose");

const Traffic = mongoose.model(
  "Traffic",
  new mongoose.Schema({
    type: { type: String, required: false },
    geometry: {
      type: { type: String, required: false },
      coordinates: { type: Array, required: false },
    },
    
    properties: {
      region_ID: { type: Number, required: false },
      region_name: { type: String, required: false },
      Type: { type: String, required: false },
      Current_Time: { type: Number, required: false },
      district_ID: { type: Number, required: false },
      district_Name: { type: String, required: false },
      district_AreaLevel: { type: Number, required: false },
      delaySeconds: { type: Number, required: false },
      district_Parent_ID: { type: String, required: false },
      district_Parent_Name: { type: Number, required: false },
      category_Code: { type: String, required: false },
      category_Name: { type: String, required: false },
      status_Code: { type: String, required: false },
      status_Name: { type: String, required: false },
      title: { type: String, required: false },
      description: { type: String, required: false },
      coordinatesPoly: { type: Array, required: false },
      typePoly: { type: String, required: false },
      coordinatesMulti: { type: Array, required: false },
      typeMulti: { type: String, required: false },
      houseNoFirst: { type: Number, required: false },
      houseNoSecond: { type: Number, required: false },
    },
  })
);

function validateTraffic(traffic) {
  const schema = {
    geometry: {
      type: Joi.string().optional(),
      coordinates: Joi.array().optional(),
    },
    type: Joi.string().optional(),
    properties: {
      region_ID: Joi.number().optional(),
      region_name: Joi.string().optional(),
      Type: Joi.string().optional(),
      Current_Time: Joi.number().optional(),
      district_ID: Joi.number().optional(),
      district_Name: Joi.string().optional(),
      district_AreaLevel: Joi.number().optional(),
      delaySeconds: Joi.number().optional(),
      district_Parent_ID: Joi.string().optional(),
      district_Parent_Name: Joi.number().optional(),
      category_Code: Joi.string().optional(),
      category_Name: Joi.string().optional(),
      status_Code: Joi.string().optional(),
      status_Name: Joi.string().optional(),
      title: Joi.string().optional(),
      description: Joi.string().optional(),
      coordinatesPoly: Joi.array().optional(),
      typePoly: Joi.string().optional(),
      coordinatesMulti: Joi.array().optional(),
      typeMulti: Joi.string().optional(),
      houseNoFirst: Joi.number().optional(),
      houseNoSecond: Joi.number().optional(),
    },
  };

  return Joi.validate(traffic, schema);
}

exports.Traffic = Traffic;
exports.validate = validateTraffic;
