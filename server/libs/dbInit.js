const mongoose = require("mongoose");
const config = require("../config");

mongoose
  .connect(config.mongodb.dbConnect, { useNewUrlParser: true })
  .then(() => console.log("Connect to db!"))
  .catch((err) => console.error(err));
mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function callback() {
  console.log("Open DB");
});

module.exports = mongoose;
