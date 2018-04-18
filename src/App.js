import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import moment from "moment";

import Weather from "./components/Weather/Weather";

class App extends Component {
  constructor() {
    super();
    this.state = {
      date: {},
      city: "",
      citySearch: "",
      loading: true
    };
    this.parseWeatherInformation = this.parseWeatherInformation.bind(this);
    this.getWeather = this.getWeather.bind(this);
  }

  componentDidMount() {
    this.getWeather("London");
  }

  getWeather(city) {
    axios
      .post("http://localhost:3005/api/get/weather", { city })
      .then(response => {
        const { data } = response;
        this.parseWeatherInformation(data);
        this.setState({
          city: data.city,
          loading: false
        });
      })
      .catch(console.log);
  }

  parseWeatherInformation(data) {
    data.list.map((info, i) => {
      if (data.list.length - 1 !== i) {
        const date = info.dt_txt.split(" ");
        if (i === 0) {
          this.setState({
            date: [{ info, weekDay: moment(date[0]).day() }]
          });
        } else {
          if (this.state.date.length !== 4) {
            const lastDate = this.state.date[0].info.dt_txt.split(" ");
            if (date[1] === lastDate[1]) {
              this.setState(prevState => ({
                date: [
                  ...prevState.date,
                  { info, weekDay: moment(date[0]).day() }
                ]
              }));
            }
          }
        }
      }
    });
  }

  handleKeyPress(event) {
    if (event.key === "Enter") {
      this.getWeather(this.state.citySearch);
      this.setState({ citySearch: "" });
    }
  }

  render() {
    const { city, week } = this.state;
    return (
      <div className="App">
        {!this.state.loading ? (
          <div className="main-container">
            <div className="title-container">
              <input
                type="text"
                value={this.state.citySearch}
                placeholder={`${city.name}, ${city.country}`}
                onChange={e => this.setState({ citySearch: e.target.value })}
                onKeyPress={e => this.handleKeyPress(e)}
              />
            </div>
            <div className="component-container">
              {this.state.date.map((el, i) => {
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
