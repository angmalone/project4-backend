const Character = require("./characters.js");
const data = require("./characters.json");

Character.remove({})
  .then(() => {
    return Character.collection.insert(data);
  })
  .then(() => {
    process.exit();
  });
