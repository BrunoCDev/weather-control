import React, { Component } from "react";
import axios from "axios";
import moment from "moment";

import Weather from "./components/Weather";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      city: "",
      citySearch: "",
      loading: true
    };
    this.parseWeatherInformation = this.parseWeatherInformation.bind(this);
    this.getWeather = this.getWeather.bind(this);
  }

  // By Default will load Weather information from London.
  componentDidMount() {
    this.getWeather("London");
  }

  // Method that takes in a city name and makes an API call to get the information
  // from that specific city.
  getWeather(city) {
    this.setState({ citySearch: "" });
    if (city) {
      axios
        .get(`http://localhost:3005/api/get/${city}`)
        .then(({ data: { city, list } }) => {
          this.setState({
            data: this.parseWeatherInformation(list),
            city,
            loading: false
          });
        })
        .catch(() => alert("Please provide a valid city!"));
    }
  }

  // Parses the information into the "data" object in state
  // so the information is separated by day.
  parseWeatherInformation(list) {
    const finalData = [];

    list.map((info, i) => {
      const needsMoreDates = finalData.length !== 4;
      const [date, hour] = info.dt_txt.split(" ");

      if (i === 0) finalData.push({ info, weekDay: moment(date).day() });
      else {
        if (needsMoreDates) {
          const [_, firstHour] = finalData[0].info.dt_txt.split(" ");

          if (hour === firstHour) {
            finalData.push({ info, weekDay: moment(date).day() });
          }
        }
      }
    });

    return finalData;
  }

  // Enables the user to press Enter instead of having to click "Find".
  handleKeyPress(e) {
    if (e.key === "Enter") {
      this.getWeather(this.state.citySearch);
    }
  }

  render() {
    // Object destructuring for shorthand.
    const { city, citySearch, data, loading } = this.state;
    const placeholder = `${city.name}, ${city.country}`;
    return (
      <div className="App">
        {!loading && (
          <div className="main-container">
            <div className="title-container">
              <input
                className="input"
                type="text"
                value={citySearch}
                placeholder={placeholder}
                onChange={e => this.setState({ citySearch: e.target.value })}
                onKeyPress={e => this.handleKeyPress(e)}
              />
              <button
                className="button"
                onClick={() => this.getWeather(citySearch)}
              >
                Find
              </button>
            </div>
            <div className="component-container">
              {data.map((el, i) => {
                return <Weather key={i} data={el} index={i} />;
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
