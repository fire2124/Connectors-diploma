const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
const MhdBusses = require('./routes/bus');
const SadBusses = require('./routes/sad');
const Trains = require('./routes/train');
const traffic = require('./routes/traffic');
// const weatherPO = require('./routes/weatherPO');
// const weatherKE = require('./routes/weatherKE');

const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost/connectors')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

app.use(express.json());
app.use('/api/currentMhdPoBusses', MhdBusses);
app.use('/api/currentSadPoBusses', SadBusses);
app.use('/api/currentTrains', Trains);
app.use('/api/currentTraffic', traffic);
// app.use('/api/currentWeatherPO', weatherPO);
// app.use('/api/currentWeatherKE', weatherKE);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));