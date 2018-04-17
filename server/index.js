// Import dependencies
const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");

// Import hidden API KEY from config.js (not shown on GITHUB)
const { apiKey } = require("./config");

// Declare the port in which the server will be run
const port = 3005;

// Run server using express
const app = express();

// Use dependencies
app.use(cors());
app.use(json());
app.use("/", express.static(__dirname));

// Test if the server is running
app.listen(port, function() {
  console.log("Server listening on port: ", port);
});
