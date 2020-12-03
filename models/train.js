const Joi = require('joi');
const mongoose = require('mongoose');

const Train = mongoose.model('Train', new mongoose.Schema({
  Nazov: {
    type: String,
    required: true,
  },
  Meska: {
    type: Number,
    required: false,
  },
  MeskaText: {
    type: String,
    required: true,
  },
  InfoZoStanice: {
    type: String,
    required: true,
  },
  Dopravca:{
    type: String,
    required:true,
  },
  Poznamka: {
    type: String,
    optional:true,
  },
  Angle: {
    type: Number,
    required: true,
  },
  PotvrdenyOdj: {
    type: Boolean,
    required: false,
  },
  OrderInStation: {
    type: Number,
    required: true,
  },
  
  CasDay: {
    type: String,
    optional:true,
  },
  CasTime: {
    type: String,
    optional:true,
  },
  CasPlanDay: {
    type: String,
    optional:true,
  },
  CasPlanTime: {
    type: String,
    optional:true,
  },
  Lat: {
    type: Number,
    required: true,
  },
  Lng: {
    type: Number,
    required: true,
  },
  From: {
    type: String,
    required: true,
  },
  To: {
    type: String,
    required: true,
  },
  OrderInJsonId: {
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

  
}));

function validateTrain(train) {
  const schema = {
    Nazov: Joi.string().required(),
    Meska: Joi.number().required(),
    MeskaText: Joi.string().required(),
    InfoZoStanice: Joi.string().required(),
    Dopravca: Joi.string().required(),
    Poznamka: Joi.optional(),
    Angle: Joi.number().required(),
    OrderInStation: Joi.number().required(),
    PotvrdenyOdj: Joi.optional(),
    CasDay: Joi.string().optional(),
    CasTime: Joi.string().optional(),
    CasPlanDay: Joi.string().optional(),
    CasPlanTime: Joi.string().optional(),
    Lat: Joi.number().required(),
    Lng: Joi.number().required(),
    From: Joi.string().required(),
    To: Joi.string().required(),
    OrderInJsonId: Joi.number().required(),
    Type: Joi.string().required(),
    CurrentTime: Joi.number().required(),
  };

  return Joi.validate(train, schema);
}

exports.Train = Train; 
exports.validate = validateTrain;