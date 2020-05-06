const express = require("express");

const router = express.Router();
const Gender = require("../models/Gender");

router.post("/add", async (req, res) => {
  const gender = new Gender(req.body.gender);
  try {
    const savedGender = await gender.save();

    res.json({ status: 1, gender: savedGender });
  } catch (err) {
    res.json({ status: 0, error: err });
  }
});

router.post("/", async (req, res) => {
  const ids = req.body.ids;
  console.log(ids);
  try {
    let genders;
    if (ids === null || ids === undefined) {
      genders = await Gender.find();
    } else {
      genders = await Gender.find({ _id: { $in: ids } });
    }

    res.json({ status: 1, genders: genders });
  } catch (err) {
    res.json({ status: 0, error: err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const removed = await Gender.remove({ _id: req.params.id });
    res.json({ status: 1, removed: removed });
  } catch (err) {
    res.json({ status: 0, error: err });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const updated = await Gender.updateOne(
      { _id: req.params.id },
      { $set: req.body.gender }
    );
    res.json({ status: 1, updated: updated });
  } catch (err) {
    res.json({ status: 0, error: err });
  }
});
module.exports = router;
