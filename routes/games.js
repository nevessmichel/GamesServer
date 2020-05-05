const express = require("express");

const router = express.Router();
const Game = require("../models/Game");

router.post("/add", (req, res) => {
  const game = new Game(req.body.game);
  game
    .save()
    .then((data) => {
      res.json({ status: 1, game: data });
    })
    .catch((err) => {
      res.json({ status: 0, error: err });
    });
});

module.exports = router;
