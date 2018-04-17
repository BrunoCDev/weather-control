// Import axios dependency to manage API call
const axios = require("axios");

// Import hidden API KEY from config.js (not shown on GITHUB)
const { apiKey } = require("./config");

const getCurrentWeatherLondon = (req, res, next) => {
  axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?q=London&APPID=${apiKey}`
    )
    .then(response => res.status(200).json(response.data))
    .catch(console.log);
};

module.exports = {
  getCurrentWeatherLondon
};
