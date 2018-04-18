// Import axios dependency to manage API call
const axios = require("axios");

// Import hidden API KEY from config.js (not shown on GITHUB)
const { apiKey } = require("./config");

const getCurrentWeatherLondon = (req, res, next) => {
  const { city } = req.params;
  axios
    .get(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${apiKey}`
    )
    .then(response => res.status(200).json(response.data))
    .catch(error =>
      res.status(error.response.data.cod).json(error.response.data.message)
    );
};

module.exports = {
  getCurrentWeatherLondon
};
