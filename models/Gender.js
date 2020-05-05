const Mongoose = require("mongoose");

const GenderSchema = Mongoose.Schema({
  name: {
    type: String,
  },
});

module.exports = Gender = Mongoose.model("Genders", GenderSchema);
