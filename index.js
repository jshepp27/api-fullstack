const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send({ bye: "buddy" });
});

app.post("/hello", (req, res) => {
  console.log(req.body);
  console.log(req.body.name);
});

console.log("testing");

const PORT = process.env.PORT || 5000;

app.listen(PORT);
