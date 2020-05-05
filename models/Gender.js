const Mongoose = require("mongoose");

const GenderSchema = Mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

module.exports = Mongoose.model("Genders", GenderSchema);
