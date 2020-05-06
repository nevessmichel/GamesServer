const Mongoose = require("mongoose");

const GameSchema = Mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  developers: {
    type: [String],
  },
  releaseDate: {
    type: Date,
  },
  trailer: {
    type: String,
  },
  plataforms: {
    type: [String],
  },
  requirements: {
    type: {
      cpu: String,
      memory: String,
      gpu: String,
      hd: String,
      gpuMemory: String,
      systems: [String],
    },
  },
  price: {
    type: Number,
  },
  image: {
    type: String,
  },
  players: {
    type: [String],
  },
  promotion: {
    type: Number,
  },
  gender: {
    type: [String],
  },
});

module.exports = Mongoose.model("Games", GameSchema);
