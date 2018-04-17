const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const methodOverride = require("method-override");
const Character = require("./db/characters.js");

const app = express();
app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(cors());

app.get("/", (req, res) => {
  Character.find()
    .then(characters => {
      res.json(characters);
    })
    .catch(err => {
      console.log(err);
    });
});

app.set("port", process.env.PORT || 3001);

app.listen(app.get("port"), () => {
  console.log(`✅ POPPIN OFF ON PORT ${app.get("port")} Y'ALL 🌟`);
});
