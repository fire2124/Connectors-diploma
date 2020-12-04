const Joi = require('joi');
const mongoose = require('mongoose');

const MhdPoBus = mongoose.model('MhdPoBus', new mongoose.Schema({
  type:{
    type: String,
    required: true,
    maxlength: 10,
    minLength: 1
  },
  geometry:{
    type:{
      type: String,
      required: true,
      maxlength: 10,
      minLength: 1
    },
    coordinates:{
      type: Array,
      required: true,
    },
  },
  properties:{
    ROUTE_NUMBER:{
      type: Number,
      required: true,
      maxlength: 5
    },
    PLANNED_START:{
      type: String,
      required: true,
      maxlength: 10
    },
    DIRECTION:{
      type: String,
      required: true,
      maxlength: 5
    },
    BUS_STOP_ORDER_NUM:{
      type: Number,
      required: true,
      maxlength: 20,
    },
    BUS_STOP_NAME_1:{
      type: String,
      required: true,
      maxlength: 20
    },
    BUS_STOP_NUM_1:{
      type: Number,
      required: true,
      maxlength: 20,
    },
    BUS_STOP_SUB_NUM_1:{
      type: Number,
      required: true,
      maxlength: 20,
    },
    BUS_STOP_NAME_2:{
      type: String,
      required: true,
      maxlength: 20
    },
    BUS_STOP_NUM_2:{
      type: Number,
      required: true,
      maxlength: 20,
    },
    BUS_STOP_SUB_NUM_2:{
      type: Number,
      required: true,
      maxlength: 20,
    },
    PLANNED_ROAD:{
      type: Number,
      required: true,
      maxlength: 20
    },
    REAL_ROAD:{
      type: Number,
      required: true,
      maxlength: 20
    },
    VARIATION:{
      type: Number,
      required: true,
      maxlength: 20
    },
    CHANGE_OF_Variation:{
      type: Number,
      required: false,
      maxlength: 20
    },
    Street:{
      type: String,
      required: false,
      maxlength: 30
    },
    Order_In_Json_Id:{
      type: Number,
      required: true,
      maxlength: 10
    },
    Type:{
      type: String,
      required: true,
      maxlength: 5
    },
    Current_Time:{
      type: Number,
      required: true,
      maxlength: 50
    }
  }
}));

function validateBus(bus) {
  const schema = {
    
      type: Joi.string().min(1).max(10).required(),
      geometry: {
        type: Joi.string().min(1).max(5).required(),
        coordinates: Joi.array().required()
      },
      properties: {
        ROUTE_NUMBER: Joi.number.required().maxLength(5),
        PLANNED_START:Joi.string().required().maxLength(10),
        DIRECTION: Joi.string().max(5).required().maxLength(5) ,
        BUS_STOP_ORDER_NUM: Joi.number().required().maxLength(20) ,
        BUS_STOP_NAME_1: Joi.string().required().maxLength(20),
        BUS_STOP_NUM_1: Joi.number.required().maxLength(20),
        BUS_STOP_SUB_NUM_1: Joi.number.required().maxLength(20),
        BUS_STOP_NAME_2: Joi.string().required().maxLength(20),
        BUS_STOP_NUM_2: Joi.number.required().maxLength(20),
        BUS_STOP_SUB_NUM_2:Joi.number.required().maxLength(20),
        PLANNED_ROAD: Joi.number.required().maxLength(20),
        REAL_ROAD: Joi.number.required().maxLength(20),
        VARIATION: Joi.number.required().maxLength(20),
        CHANGE_OF_Variation: Joi.number.optional().maxLength(20),
        Street: Joi.string().optional().maxLength(30),
        OrderInJsonId: Joi.number().required().maxLength(10),
        Type: Joi.string().required().maxLength(5),
        CurrentTime: Joi.number().required().maxLength(50),
      }

  };

  return Joi.validate(bus, schema);
}

exports.MhdPoBus = MhdPoBus; 
exports.validate = validateBus;