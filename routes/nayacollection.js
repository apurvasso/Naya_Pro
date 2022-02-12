const express = require("express");

const router = express.Router();
const NayaCollection = require("../models/nayamodel");

router.get("/", async (req, res) => {
  //request that you send should be async request so that process is not locked
  try {
    const nayacollection = await NayaCollection.find();
    //res.json(nayacollection);
    res.send(nayacollection);
  } catch (err) {
    res.send("Error" + err);
  }
}); //for furniture

router.get("/:id", async (req, res) => {
  //request that you send should be async request so that process is not locked
  try {
    const nayacollection = await NayaCollection.findById(req.params.id);
    res.json(nayacollection);
  } catch (err) {
    res.send("Error" + err);
  }
});

router.post("/", async (req, res) => {
  const nayacollection = new NayaCollection({
    items: req.body.items,
    product_ids: req.body.product_ids,
    prices: req.body.prices,
    descriptions: req.body.descriptions,
  });

  try {
    const n1 = await nayacollection.save();
    res.json(n1);
  } catch (err) {
    res.send("Error");
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const nayacollection = await NayaCollection.findById(req.params.id);
    nayacollection.sub = req.body.sub;
    const n1 = await nayacollection.save();
    res.json(n1);
  } catch (err) {
    res.send("Error");
  }
});

module.exports = router;
