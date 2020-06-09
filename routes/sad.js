const { SadPoBus, validate } = require("../models/sad");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

let request = require("request");
let options = {
  method: "POST",
  // https://www.dispecing.info/TDWebAPI/api/GetOnlineData
  url: "https://www.dispecing.info/TDWebAPI/api/GetOnlineData",
  headers: {
    "content-type": "application/json",
  },
  body: {
    login: "1007",
    heslo: "heslo",
  },
  json: true,
};

router.get("/", async (req, res) => {
  // get current busses
  await request(options, function (error, response, body) {
    if (error) throw new Error(error);
    let array = [];

    body.forEach(async (zaznam) => {
      switch (true) {
        case zaznam.Line == 701402:
          zaznam.From = "Bardejov";
          zaznam.Via = "Beloveža - Hažlín - Ortuťová";
          zaznam.To = "Lipová";
          array.push(zaznam);
          break;

        case zaznam.Line == 701404:
          zaznam.From = "Bardejov";
          zaznam.Via = "Kožany";
          zaznam.To = "Giraltovce";
          array.push(zaznam);
          break;

        case zaznam.Line == 701406:
          zaznam.From = "Bardejov";
          zaznam.Via = "Poliakovce - Porúbka - Marhaň";
          zaznam.To = "Giraltovce";
          array.push(zaznam);
          break;

        case zaznam.Line == 701407:
          zaznam.From = "Bardejov";
          zaznam.Via = "Lukavica - Rešov - N.Voľa - Dubie - Hankovce - Marhaň";
          zaznam.To = "Giraltovce";
          array.push(zaznam);
          break;

        case zaznam.Line == 701411:
          zaznam.From = "Bardejov";
          zaznam.Via = "Lopúchov - Koprivnica";
          zaznam.To = "Dubie";
          array.push(zaznam);
          break;

        case zaznam.Line == 701412:
          zaznam.From = "Bardejov";
          zaznam.Via = "Prešov";
          zaznam.To = "Košice";
          array.push(zaznam);
          break;

        case zaznam.Line == 701414:
          zaznam.From = "Bardejov";
          zaznam.Via = "Šiba - Bartošovce - Hertník - Raslavice";
          zaznam.To = "Vaniškovce";
          array.push(zaznam);
          break;

        case zaznam.Line == 701417:
          zaznam.From = "Bardejov";
          zaznam.Via = "Hervartov";
          zaznam.To = "Richvald";
          array.push(zaznam);
          break;

        case zaznam.Line == 701418:
          zaznam.From = "Bardejov";
          zaznam.Via = "Kurov - Kružľov - Krivé/Bogliarka";
          zaznam.To = "Kríže";
          array.push(zaznam);
          break;

        case zaznam.Line == 701419:
          zaznam.From = "Bardejov";
          zaznam.Via = "Snakov - Hrabské - Livov";
          zaznam.To = "Livovská Huta";
          array.push(zaznam);
          break;

        case zaznam.Line == 701420:
          zaznam.From = "Bardejov";
          zaznam.Via = "";
          zaznam.To = "Lenartov";
          array.push(zaznam);
          break;

        case zaznam.Line == 701423:
          zaznam.From = "Bardejov";
          zaznam.Via = "Zlaté";
          zaznam.To = "Cigeľka/Frička";
          array.push(zaznam);
          break;

        case zaznam.Line == 701424:
          zaznam.From = "Bardejov";
          zaznam.Via = "Zlaté";
          zaznam.To = "Vyšný Tvarožec";
          array.push(zaznam);
          break;

        case zaznam.Line == 701427:
          zaznam.From = "Bardejov";
          zaznam.Via = "Zborov - Stebnická Huta";
          zaznam.To = "Regetovka/Becherov";
          array.push(zaznam);
          break;

        case zaznam.Line == 701428:
          zaznam.From = "Bardejov";
          zaznam.Via = "Jedlinka - Mikulášová";
          zaznam.To = "Ondavka";
          array.push(zaznam);
          break;

        case zaznam.Line == 701429:
          zaznam.From = "Bardejov";
          zaznam.Via = "Svidník";
          zaznam.To = "Stropkov";
          array.push(zaznam);
          break;

        case zaznam.Line == 701432:
          zaznam.From = "Bardejov";
          zaznam.Via = "Šarišské Čierne - Cernina";
          zaznam.To = "Dubová";
          array.push(zaznam);
          break;

        case zaznam.Line == 707401:
          zaznam.From = "Prešov";
          zaznam.Via = "Abranovce";
          zaznam.To = "Zlatá Baňa";
          array.push(zaznam);
          break;

        case zaznam.Line == 707403:
          zaznam.From = "Prešov";
          zaznam.Via = "Abranovce - Lesíček - Tuhrina";
          zaznam.To = "Červenica";
          array.push(zaznam);
          break;

        case zaznam.Line == 707405:
          zaznam.From = "Prešov";
          zaznam.Via = "Žehňa - Brestov";
          zaznam.To = "Varhaňovce";
          array.push(zaznam);
          break;

        case zaznam.Line == 707407:
          zaznam.From = "Prešov";
          zaznam.Via = "Drienov - Šarišské Bohdanovce - Brestov";
          zaznam.To = "Varhaňovce";
          array.push(zaznam);
          break;

        case zaznam.Line == 707408:
          zaznam.From = "Prešov";
          zaznam.Via = "Drienov - Lemešany";
          zaznam.To = "Košice";
          array.push(zaznam);
          break;

        case zaznam.Line == 707410:
          zaznam.From = "Prešov";
          zaznam.Via = "Lemešany";
          zaznam.To = "Košice";
          array.push(zaznam);
          break;

        case zaznam.Line == 707416:
          zaznam.From = "Prešov";
          zaznam.Via = "Sedlice - Klenov";
          zaznam.To = "Margecany";
          array.push(zaznam);
          break;

        case zaznam.Line == 707417:
          zaznam.From = "Prešov";
          zaznam.Via = "Brežany - Kvačany";
          zaznam.To = "Žipov";
          array.push(zaznam);
          break;

        case zaznam.Line == 707418:
          zaznam.From = "Prešov";
          zaznam.Via = "Župčany";
          zaznam.To = "Kojatice";
          array.push(zaznam);
          break;

        case zaznam.Line == 707419:
          zaznam.From = "Prešov";
          zaznam.Via = "Križovany - Ovčie - Víťaz";
          zaznam.To = "Široké";
          array.push(zaznam);
          break;

        case zaznam.Line == 707421:
          zaznam.From = "Prešov";
          zaznam.Via = "Lipovce - Široké";
          zaznam.To = "Víťaz";
          array.push(zaznam);
          break;

        case zaznam.Line == 707424:
          zaznam.From = "Prešov";
          zaznam.Via =
            "Jarovnice - Chminianska Nová Ves - Hermanovce - Štefanovce";
          zaznam.To = "Renčišov";
          array.push(zaznam);
          break;

        case zaznam.Line == 707430:
          zaznam.From = "Prešov";
          zaznam.Via = "Medzany - Ostrovany - Uzovský Šalgov/Sabinov";
          zaznam.To = "Lipany";
          array.push(zaznam);
          break;

        case zaznam.Line == 707431:
          zaznam.From = "Prešov";
          zaznam.Via = "Šarišské Michaľany - Sabinov - Lipany";
          zaznam.To = "Tichý Potok";
          array.push(zaznam);
          break;

        case zaznam.Line == 707432:
          zaznam.From = "Prešov";
          zaznam.Via = "Stará Ľubovňa";
          zaznam.To = "Spišská Stará Ves / Podolínec";
          array.push(zaznam);
          break;

        case zaznam.Line == 707435:
          zaznam.From = "Prešov";
          zaznam.Via = "Ratvaj";
          zaznam.To = "Jakubovany";
          array.push(zaznam);
          break;

        case zaznam.Line == 707436:
          zaznam.From = "Prešov";
          zaznam.Via = "Uzovce - Ratvaj";
          zaznam.To = "Hubošovce";
          array.push(zaznam);
          break;

        case zaznam.Line == 707437:
          zaznam.From = "Prešov";
          zaznam.Via = "Ratvaj - Terňa, Babin Potok";
          zaznam.To = "Závadka";
          array.push(zaznam);
          break;

        case zaznam.Line == 707438:
          zaznam.From = "Prešov";
          zaznam.Via = "Fintice";
          zaznam.To = "Terňa, Hradisko/Veľký Slivník";
          array.push(zaznam);
          break;

        case zaznam.Line == 707442:
          zaznam.From = "Prešov";
          zaznam.Via = "Okružná - Šarišská Poruba - Nemcovce";
          zaznam.To = "Chmeľov";
          array.push(zaznam);
          break;

        case zaznam.Line == 707444:
          zaznam.From = "Prešov";
          zaznam.Via = "Čeľovce / Chmeľov";
          zaznam.To = "Giraltovce";
          array.push(zaznam);
          break;

        case zaznam.Line == 707445:
          zaznam.From = "Prešov";
          zaznam.Via = "Chmeľov - Giraltovce - Fijaš - Domaša";
          zaznam.To = "Stropkov";
          array.push(zaznam);
          break;

        case zaznam.Line == 707446:
          zaznam.From = "Prešov";
          zaznam.Via = "Hanušovce nad Topľou - Babie - Giraltovce";
          zaznam.To = "Stropkov";
          array.push(zaznam);
          break;

        case zaznam.Line == 707447:
          zaznam.From = "Prešov";
          zaznam.Via = "Giraltovce - Svidník";
          zaznam.To = "Vyšný Komárnik";
          array.push(zaznam);
          break;

        case zaznam.Line == 707448:
          zaznam.From = "Prešov";
          zaznam.Via = "Radvanovce - Pavlovce - Hanušovce nad Toplou";
          zaznam.To = "Ruská Voľa";
          array.push(zaznam);
          break;

        case zaznam.Line == 707449:
          zaznam.From = "Prešov";
          zaznam.Via = "Vranov nad Topľou - Strážske - Humenné";
          zaznam.To = "Snina / Michalovce";
          array.push(zaznam);
          break;

        case zaznam.Line == 707452:
          zaznam.From = "Prešov";
          zaznam.Via = "Vyšná Šebastová,Severná";
          zaznam.To = "Podhradík";
          array.push(zaznam);
          break;

        case zaznam.Line == 708401:
          zaznam.From = "Lipany";
          zaznam.Via = "Lúčka";
          zaznam.To = "Potoky";
          array.push(zaznam);
          break;

        case zaznam.Line == 708402:
          zaznam.From = "Lipany";
          zaznam.Via = "Rožkovany";
          zaznam.To = "Miľpoš";
          array.push(zaznam);
          break;

        case zaznam.Line == 708403:
          zaznam.From = "Vyšný Slavkov / T.Potok";
          zaznam.Via = "Brezovica - Lipany - Prešov";
          zaznam.To = "Košice, U.S.Steel";
          array.push(zaznam);
          break;

        case zaznam.Line == 708404:
          zaznam.From = "Lipany";
          zaznam.Via = "Dubovica";
          zaznam.To = "Ďačov";
          array.push(zaznam);
          break;

        case zaznam.Line == 708411:
          zaznam.From = "Prešov";
          zaznam.Via = "Sabinov - Lipany - Oľšov - Poloma";
          zaznam.To = "Bajerovce";
          array.push(zaznam);
          break;

        case zaznam.Line == 708412:
          zaznam.From = "Lipany";
          zaznam.Via = "Kamenica - Šarišské Jastrabie - Vislanka";
          zaznam.To = "Čirč";
          array.push(zaznam);
          break;

        case zaznam.Line == 708452:
          zaznam.From = "Hanigovce";
          zaznam.Via = "Jakubova Voľa - Sabinov";
          zaznam.To = "Jakubovany";
          array.push(zaznam);
          break;

        case zaznam.Line == 708453:
          zaznam.From = "Sabinov";
          zaznam.Via = "Jakubovany - Terňa";
          zaznam.To = "Veľký Slivník";
          array.push(zaznam);
          break;

        case zaznam.Line == 708455:
          zaznam.From = "Sabinov";
          zaznam.Via = "";
          zaznam.To = "Drienica";
          array.push(zaznam);
          break;

        case zaznam.Line == 708459:
          zaznam.From = "Sabinov / Prešov";
          zaznam.Via = "Široké - Krompachy";
          zaznam.To = "Spišská Nová Ves";
          array.push(zaznam);
          break;

        case zaznam.Line == 708461:
          zaznam.From = "Sabinov";
          zaznam.Via = "Uzovský Šalgov - Renčišov";
          zaznam.To = "Hermanovce";
          array.push(zaznam);
          break;

        case zaznam.Line == 708465:
          zaznam.From = "Sabinov";
          zaznam.Via = "Hubošovce - Gregorovce";
          zaznam.To = "Prešov";
          array.push(zaznam);
          break;

        case zaznam.Line == 708468:
          zaznam.From = "Sabinov";
          zaznam.Via = "Červená Voda - Jakovany / Peč. N. Ves - Ľutina";
          zaznam.To = "Olejníkov";
          array.push(zaznam);
          break;

        case zaznam.Line == 709451:
          zaznam.From = "Snina";
          zaznam.Via = "Humenné - Havaj";
          zaznam.To = "Stropkov";
          array.push(zaznam);
          break;

        case zaznam.Line == 712451:
          zaznam.From = "Giraltovce";
          zaznam.Via = "Hanušovce nad Topľou - Bystré - Vranov";
          zaznam.To = "Michalovce";
          array.push(zaznam);
          break;

        case zaznam.Line == 712452:
          zaznam.From = "Kalnište";
          zaznam.Via = "Giraltovce - Štefurov";
          zaznam.To = "Okrúhle";
          array.push(zaznam);
          break;

        case zaznam.Line == 712453:
          zaznam.From = "Giraltovce";
          zaznam.Via = "Železník";
          zaznam.To = "Dukovce";
          array.push(zaznam);
          break;

        case zaznam.Line == 712455:
          zaznam.From = "Giraltovce";
          zaznam.Via = "Marhaň - Vyšný Kručov - Lopúchov";
          zaznam.To = "Raslavice";
          array.push(zaznam);
          break;

        case zaznam.Line == 712459:
          zaznam.From = "Giraltovce";
          zaznam.Via = "Koprivnica";
          zaznam.To = "Prešov";
          array.push(zaznam);
          break;
      }
    })
    let time = new Date();
    let currentTime = time.getTime();
    let count2 = 0;
    let array2 = [];
    array.forEach(async (zaznam) => {
      zaznam.OrderInJsonId = ++count2;
      zaznam.Type = "SAD";
      zaznam.CurrentTime = currentTime;
      array2.push(zaznam);
    });
    res.send(array2);
  });
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
    console.log(req.body);
    
  let sadBus = new SadPoBus({
    Line: req.body.Line,
    Trip: req.body.Trip,
    Delay: req.body.Delay,
    Lat: req.body.Lat,
    Lng: req.body.Lng,
    Dir: req.body.Dir,
    TripTime: req.body.TripTime,
    From: req.body.From,
    Via: req.body.Via,
    To: req.body.To,
    OrderInJsonId: req.body.OrderInJsonId,
    Type: req.body.Type,
    CurrentTime: req.body.CurrentTime,
  });
  sadBus = await sadBus.save();
  res.send(req);
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const bus = await SadPoBus.findByIdAndUpdate(
    req.params.id,
    {
      Line: req.body.Line,
      Trip: req.body.Trip,
      Delay: req.body.Delay,
      Lat: req.body.Lat,
      Lng: req.body.Lng,
      Dir: req.body.Dir,
      TripTime: req.body.TripTime,
      From: req.body.From,
      Via: req.body.Via,
      To: req.body.To,
      OrderInJsonId: req.body.OrderInJsonId,
      Type: req.body.Type,
      CurrentTime: req.body.CurrentTime,
    },
    { new: true }
  );

  if (!bus)
    return res.status(404).send("The bus with the given ID was not found.");

  res.send(bus);
});

router.delete("/:id", async (req, res) => {
  const bus = await SadPoBus.findByIdAndRemove(req.params.id);

  if (!bus)
    return res.status(404).send("The bus with the given ID was not found.");

  res.send(bus);
});

router.get("/:id", async (req, res) => {
  const bus = await SadPoBus.findById(req.params.Id);
  console.log(bus);

  if (!bus)
    return res.status(404).send("The bus with the given ID was not found.");

  res.send(bus);
});

module.exports = router;