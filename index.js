const express = require("express");

const connection = require("./config/config.js");

const app = express();

app.get("/", (req, res) => {
  res.send("working");
});

app.listen(8080, async () => {
  try {
    await connection;
    console.log("db connected successfully");
  } catch (err) {
    console.log(err);
  }
});
