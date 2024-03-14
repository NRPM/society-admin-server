var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
const getResidents = require("./api/getResidents");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: true }));

app.get("/getresidents", (req, res) => {
  res.status(200).send(getResidents());
});

app.listen(5001, () => {
  console.log("server listening on port 5001 ");
});
