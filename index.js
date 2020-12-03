const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
const MhdBusses = require('./routes/bus');
const SadBusses = require('./routes/sad');
const Trains = require('./routes/train');
const traffic = require('./routes/traffic');
const weatherPO = require('./routes/weatherPo');
const weatherKE = require('./routes/weatherKe');
const Street  = require('./routes/street')
const express = require('express');
const app = express();



mongoose.connect('mongodb://localhost/connectors')
 .then(() => console.log('Connected to MongoDB...'))
 .catch(err => console.error('Could not connect to MongoDB...'));


app.use(express.json());
app.use("/api/v1/PresovStreets",Street)
app.use('/api/v1/currentMhdPoBusses', MhdBusses);
app.use('/api/v1/currentSadPoBusses', SadBusses);
app.use('/api/v1/currentTrains', Trains);
app.use('/api/v1/currentTraffic', traffic);
app.use('/api/v1/currentWeatherPo', weatherPO);
app.use('/api/v1/currentWeatherKe', weatherKE);


const port = process.env.PORT || 9200;
app.listen(port, () => console.log(`Listening on port ${port}...`));