const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.get("/", (req, res) => {
  res.send("server working well!");
});

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
