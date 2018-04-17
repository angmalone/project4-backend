const Character = require("../models/Character");
const data = require("./characters.json");

Character.remove({})
  .then(() => {
    return Character.collection.insert(data);
  })
  .then(() => {
    process.exit();
  });
