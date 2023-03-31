const mongoose = require("mongoose");

require("dotenv").config();
const connection = mongoose.connect(process.env.MONGO_URL);

mongoose.connection.on("connected", () => {
  console.log("Connection established");
});

mongoose.connection.on("disconnected", () => {
  console.log("Disconnection established");
});
module.exports = {
  connection,
};
