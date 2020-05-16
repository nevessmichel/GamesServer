const express = require("express");

const router = express.Router();
const Game = require("../models/Game");

router.post("/add", async (req, res) => {
  const game = new Game(req.body.game);
  try {
    const savedGame = await game.save();
    res.json({ status: 1, game: savedGame });
  } catch (err) {
    res.json({ status: 0, error: err });
  }
});

router.post("/", async (req, res) => {
  const ids = req.body.ids;
  try {
    let games;
    if (ids === null || ids === undefined || ids.length === 0) {
      games = await Game.find();
    } else {
      games = await Game.find({ _id: { $in: ids } });
    }
    res.json({ status: 1, games: games });
  } catch (err) {
    res.json({ status: 0, error: err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const removed = await Game.deleteOne({ _id: req.params.id });
    res.json({ status: 1, removed: removed });
  } catch (err) {
    res.json({ status: 0, error: err });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const updated = await Game.updateOne(
      { _id: req.params.id },
      { $set: req.body.game }
    );
    res.json({ status: 1, updated: updated });
  } catch (err) {
    res.json({ status: 0, error: err });
  }
});

module.exports = router;
