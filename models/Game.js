const Mongoose = require("mongoose");

const GameSchema = Mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  developers: {
    type: [String],
    required: true,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
  trailer: {
    type: String,
    required: true,
  },
  plataforms: {
    type: [String],
    required: true,
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
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  players: {
    type: [String],
    required: true,
  },
  promotion: {
    type: Number,
    required: true,
  },
  gender: {
    type: [String],
    required: true,
  },
});

module.exports = Mongoose.model("Games", GameSchema);
