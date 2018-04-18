import React, { Component } from "react";
import "./App.css";

import axios from "axios";
import moment from "moment";

import Weather from "./components/Weather/Weather";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
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
        .then(response => {
          const { data } = response;
          this.parseWeatherInformation(data);
          this.setState({
            city: data.city,
            loading: false
          });
        })
        .catch(error => {
          console.log(error);
          alert("Please provide a valid city!");
        });
    }
  }

  // Parses the information into the "data" object in state
  // so the information is seperated by day.
  parseWeatherInformation(response) {
    response.list.map((info, i) => {
      if (response.list.length - 1 !== i) {
        const data = info.dt_txt.split(" ");
        if (i === 0) {
          this.setState({
            data: [{ info, weekDay: moment(data[0]).day() }]
          });
        } else {
          if (this.state.data.length !== 4) {
            const lastData = this.state.data[0].info.dt_txt.split(" ");
            if (data[1] === lastData[1]) {
              this.setState(prevState => ({
                data: [
                  ...prevState.data,
                  { info, weekDay: moment(data[0]).day() }
                ]
              }));
            }
          }
        }
      }
    });
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
    return (
      <div className="App">
        {!loading ? (
          <div className="main-container">
            <div className="title-container">
              <input
                className="input"
                type="text"
                value={citySearch}
                placeholder={`${city.name}, ${city.country}`}
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
        ) : null}
      </div>
    );
  }
}

export default App;
