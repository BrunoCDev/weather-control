import React, { Component } from "react";
import "./Weather.css";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      week: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ]
    };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(i, str) {
    if (i % 2 === 0 && str === "header") {
      return "#282936";
    }
    if (i % 2 !== 0 && str === "header") {
      return "#1F212B";
    }
    if (i % 2 === 0 && str === "body") {
      return "#2C2E3C";
    } else {
      return "#222530";
    }
  }

  render() {
    console.log(this.props);
    const data = this.props.data;
    const { icon, description } = data.info.weather[0];
    const { temp } = data.info.main;
    const { week } = this.state;
    const { index } = this.props;
    return (
      <div
        className="weather-container"
        style={{ backgroundColor: this.changeColor(index, "header") }}
      >
        <div
          className="weather-header"
          style={{ backgroundColor: this.changeColor(index, "header") }}
        >
          <p className="weekday-text">
            {index === 0 ? "Today" : week[data.weekDay]}
          </p>
        </div>
        <div
          className="weather-body"
          style={{ backgroundColor: this.changeColor(index, "body") }}
        >
          <div>
            <img
              className="icon"
              src={`http://openweathermap.org/img/w/${icon}.png`}
              alt="Weather"
            />
          </div>
          <div>
            <p className="description-text">{description}</p>
          </div>
          <div>
            <p className="temp-cel">{Math.round(temp - 273.15)}°C</p>
          </div>
          <div className="temp-fel-container">
            <p className="temp-fel">
              {Math.round((temp - 273.15) * 1.8 + 32)}°F
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Weather;
