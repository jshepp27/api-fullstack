const express = require(express);
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});
console.log("testing");

app.listen(5000);
