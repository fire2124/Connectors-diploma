//dynamic
const MhdBusses = require('./routes/bus');
const SadBusses = require('./routes/sad');
const Trains = require('./routes/train');
const traffic = require('./routes/traffic');
const weatherPO = require('./routes/weatherPo');
const weatherKE = require('./routes/weatherKe');
//static
const Street  = require('./routes/static/street')
const MhdStops  = require('./routes/static/stopsMhd')
const SadStops  = require('./routes/static/stopsSAD')
const TrainStops= require('./routes/static/stopsTrains')

const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(express.json());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use("/api/v1/PresovStreets",Street)
app.use("/api/v1/PresovStops",MhdStops)
app.use("/api/v1/SadStops",SadStops)
app.use("/api/v1/TrainStops",TrainStops)

app.use('/api/v1/currentMhdPoBusses', MhdBusses);
app.use('/api/v1/currentSadPoBusses', SadBusses);
app.use('/api/v1/currentTrains', Trains);
app.use('/api/v1/currentTraffic', traffic);
app.use('/api/v1/currentWeatherPo', weatherPO);
app.use('/api/v1/currentWeatherKe', weatherKE);


const port = 9500;
app.listen(port, () => console.log(`Listening on port ${port}...`));