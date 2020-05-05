const express = require("express");

const router = express.Router();

router.get("/list", (req, res) => {
  var data = "x";
  res.send(data);
});

module.exports = router;
