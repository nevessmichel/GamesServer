const Express = require("express");
const Cors = require("cors");
const Mongoose = require("mongoose");
require("dotenv/config");
const body_parser = require("body-parser");

const Gender = require("./models/Gender");
const Game = require("./models/Game");
const GamesRoute = require("./routes/games");
const GendersRoute = require("./routes/genders");

Mongoose.connect(
  process.env.DB_CONNECTION,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("connected to DB!");
  }
);

const app = Express();

app.use(Cors());
app.use(
  body_parser.urlencoded({
    extended: true,
  })
);

app.use(body_parser.json());
app.use("/games", GamesRoute);
app.use("/genders", GendersRoute);

const port = 3000;

app.get("/ping", (req, res) => {
  res.send("Server Up!");
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
