const mongoose = require("../db/connection");

const CharacterSchema = new mongoose.Schema({
  build: String,
  weapons: String,
  perks: String,
  faction: String
});

const Character = mongoose.model("Character", CharacterSchema);

module.exports = Character;
