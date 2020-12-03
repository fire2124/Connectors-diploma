const { Train, validate } = require("../models/train");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

let request = require("request");
let options = {
  method: "POST",
  url: "http://mapa.zsr.sk/json.rpc",
  body: {
    jsonrpc: "2.0",
    method: "GetTrainDelaySimple",
    params: [],
    id: 2,
  },
  json: true,
};

router.get("/", async (req, res) => {
  // get current trains

  await request(options, async function (error, response, body) {
    if (error) throw new Error(error);
    let json = body;
    let array = [];
    let a = {};
    let count = 0;
    let globalObject = json.result;
    let time = new Date();
    let currentTime = time.getTime();

    globalObject.forEach(async (zaznam) => {
      let lon = zaznam.Position[1];
      if (lon >= 20.4595161) {
        count++;
        delete zaznam.Trasa;
        let resC = zaznam.Cas.split(" ");
        zaznam.CasDay = resC[0];
        zaznam.CasTime = resC[1];
        let resCp = zaznam.CasPlan.split(" ");
        zaznam.CasPlanDay = resCp[0];
        zaznam.CasPlanTime = resCp[1];
        zaznam.Lat = zaznam.Position[0];
        zaznam.Lng = zaznam.Position[1];
        delete zaznam.Position;
        delete zaznam.Cas;
        delete zaznam.CasPlan;
        delete zaznam.MeskaTextColor;
        let res = zaznam.Popis.split("->");
        zaznam.From = res[0]
          .split(")")[1]
          .substring(1, res[0].split(")")[1].length - 1);
        zaznam.To = res[1]
          .split("(")[0]
          .substring(1, res[1].split("(")[0].length - 1);
        zaznam.CurrentTime = currentTime;
        zaznam.Type = "Train";
        zaznam.OrderInJsonId = count;
        delete zaznam.Popis;
        delete zaznam.MeskaColor;
        array.push(zaznam);
      }
    })
    res.send(array);
  });

  //const buss = await bus.find().sort('name');
  //res.send(buss);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let train = new Train({
    Nazov: req.body.Nazov,
    Meska: req.body.Meska,
    MeskaText: req.body.MeskaText,
    InfoZoStanice: req.body.InfoZoStanice,
    Poznamka: req.body.Poznamka,
    Dopravca: req.body.Dopravca,
    Angle: req.body.Angle,
    OrderInStation: req.body.OrderInStation,
    PotvrdenyOdj:req.body.PotvrdenyOdj,
    CasDay: req.body.CasDay,
    CasTime: req.body.CasTime,
    CasPlanDay: req.body.CasPlanDay,
    CasPlanTime: req.body.CasPlanTime,
    Lat: req.body.Lat,
    Lng: req.body.Lng,
    From: req.body.From,
    To: req.body.To,
    OrderInJsonId: req.body.OrderInJsonId,
    Type: req.body.Type,
    CurrentTime: req.body.CurrentTime,
  });
  train = await train.save();
  res.send(req);
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const train = await Train.findByIdAndUpdate(
    req.params.id,
    {
        Nazov: req.body.Nazov,
        Meska: req.body.Meska,
        MeskaText: req.body.MeskaText,
        InfoZoStanice: req.body.InfoZoStanice,
        Poznamka: req.body.Poznamka,
        Angle: req.body.Angle,
        OrderInStation: req.body.OrderInStation,
        PotvrdenyOdj:req.body.PotvrdenyOdj,
        CasDay: req.body.CasDay,
        CasTime: req.body.CasTime,
        CasPlanDay: req.body.CasPlanDay,
        CasPlanTime: req.body.CasPlanTime,
        Lat: req.body.lat,
        Lng: req.body.lng,
        From: req.body.From,
        To: req.body.To,
        OrderInJsonId: req.body.OrderInJsonId,
        Type: req.body.Type,
        CurrentTime: req.body.CurrentTime,
    },
    { new: true }
  );

  if (!train)
    return res.status(404).send("The train with the given ID was not found.");

  res.send(train);
});

router.delete("/:id", async (req, res) => {
  const train = await Train.findByIdAndRemove(req.params.id);

  if (!train)
    return res.status(404).send("The train with the given ID was not found.");

  res.send(train);
});

router.get("/:id", async (req, res) => {
  const train = await Train.findById(req.params.Id);
  console.log(train);

  if (!train)
    return res.status(404).send("The train with the given ID was not found.");

  res.send(train);
});

module.exports = router;
