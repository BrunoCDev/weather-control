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
      ],
      loading: true
    };
    this.changeColor = this.changeColor.bind(this);
    this.parseDescription = this.parseDescription.bind(this);
  }

  componentDidMount() {
    this.setState({ loading: false });
  }

  // Changes the <div> color to create pattern
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

  // Uppercases the first letter of the description
  parseDescription(description) {
    description = description.split(" ");
    const result = [];
    description.map(el => {
      result.push(el[0].toUpperCase() + el.slice(1, el.length));
    });
    return result.join(" ");
  }

  render() {
    // Object destructuring for shorthand
    const data = this.props.data;
    const { icon, description } = data.info.weather[0];
    const { temp } = data.info.main;
    const { week, loading } = this.state;
    const { index } = this.props;

    // Gets the day number
    const date = data.info.dt_txt.split(" ");
    const day = date[0].split("-");

    return !loading ? (
      <div
        className="weather-container"
        style={{ backgroundColor: this.changeColor(index, "header") }}
      >
        <div
          className="weather-header"
          style={{ backgroundColor: this.changeColor(index, "header") }}
        >
          <p className="weekday-text">
            {index === 0
              ? "Today " + day[2]
              : week[data.weekDay] + ` ${day[2]}`}
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
            <p className="description-text">
              {this.parseDescription(description)}
            </p>
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
    ) : null;
  }
}

export default Weather;
