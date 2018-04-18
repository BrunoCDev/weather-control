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
  }
  render() {
    console.log(this.props.data);
    const data = this.props.data;
    const { icon, description } = data.info.weather[0];
    const { temp } = data.info.main;
    const { week } = this.state;
    return (
      <div className="weather-container">
        <div className="weather-header">
          <p className="weekday-text">{week[data.weekDay]}</p>
        </div>
        <div className="weather-body">
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
          <div>
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
