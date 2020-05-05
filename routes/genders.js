const express = require("express");

const router = express.Router();
const Gender = require("../models/Gender");

router.post("/add", (req, res) => {
  const gender = new Gender(req.body.gender);
  gender
    .save()
    .then((data) => {
      res.json({ status: 1, gender: data });
    })
    .catch((err) => {
      res.json({ status: 0, error: err });
    });
});
module.exports = router;
