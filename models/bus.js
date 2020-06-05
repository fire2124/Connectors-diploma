const Joi = require('joi');
const mongoose = require('mongoose');

const Bus = mongoose.model('Bus', new mongoose.Schema({
  number: {
    type: String,
    required: true,
    maxlength: 5
  },
  numberAlt: {
    type: String,
    required: false,
    maxlength:5
  },
  direction: {
    type: Number,
    required: true,
    minlength: 1,
    maxlength: 5
  },
  lat: {
    type: Number,
    required: true,
    minlength: 1,
    maxlength: 20
  },
  lng: {
    type: Number,
    required: true,
    minlength: 1,
    maxlength: 20
  },
  departure: {
    type: String,
    required: true,
    maxlength: 10
  },
  delay: {
    type: Number,
    required: true,
    minlength: 1,
    maxlength: 100
  },
  vehicle: {
    type: Number,
    required: true,
    minlength: 1,
    maxlength: 100
  },
  station: {
    type: String,
    required: true,
    maxlength: 50
  },
  isTechnical: {
    type: Boolean,
    required: true,
    maxlength: 10
  },
  Id: {
    type: Number,
    required: true,
  },
  Type: {
    type: String,
    required: true,
    maxlength: 5
  },
  CurrentTime: {
    type: Number,
    required: true,
    maxlength: 5
  },

  
}));

function validateCustomer(bus) {
  const schema = {
    number: Joi.string().min(1).max(5).required(),
    numberAlt: Joi.optional(),
    direction: Joi.number().max(5).required(),
    lat: Joi.number().required(),
    lng: Joi.number().required(),
    departure: Joi.string().max(50).required(),
    delay:Joi.number().required(),
    vehicle: Joi.number().required(),
    station: Joi.string().required(),
    isTechnical: Joi.boolean(),
    Id: Joi.number().required(),
    Type: Joi.string().required(),
    CurrentTime: Joi.number().required(),
  };

  return Joi.validate(bus, schema);
}

exports.Bus = Bus; 
exports.validate = validateCustomer;