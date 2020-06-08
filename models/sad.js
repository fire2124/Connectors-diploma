const Joi = require('joi');
const mongoose = require('mongoose');

const SadPoBus = mongoose.model('SadPoBus', new mongoose.Schema({
  Line: {
    type: String,
    required: true,
    maxlength: 10
  },
  Trip: {
    type: Number,
    required: false,
  },
  Delay: {
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
  Dir: {
    type: Number,
    required: true,
  },
  TripTime: {
    type: Number,
    required: true,
  },
  From: {
    type: String,
    required: true,
  },
  Via: {
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

function validateSadPoBus(bus) {
  const schema = {
    Line: Joi.string().max(10).required(),
    Trip: Joi.number().required(),
    Delay: Joi.number().required(),
    Lat: Joi.number().required(),
    Lng: Joi.number().required(),
    Dir: Joi.number().required(),
    TripTime:Joi.number().required(),
    From: Joi.string().required(),
    Via: Joi.string().optional(),
    To: Joi.string().required(),
    OrderInJsonId: Joi.number().required(),
    Type: Joi.string().required(),
    CurrentTime: Joi.number().required(),
  };

  return Joi.validate(bus, schema);
}

exports.SadPoBus = SadPoBus; 
exports.validate = validateSadPoBus;