const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");

const port = 3005;
const app = express();

app.use(cors());
app.use(json());
app.use("/", express.static(__dirname));

app.listen(port, function() {
  console.log("Server listening on port: ", port);
});
