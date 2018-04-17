import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      test: false
    };
    this.getCurrentWeatherLondon = this.getCurrentWeatherLondon.bind(this);
  }

  getCurrentWeatherLondon() {
    axios
      .get("http://localhost:3005/api/get/london")
      .then(response => this.setState({ data: response.data, test: true }))
      .catch(console.log);
  }

  render() {
    console.log(this.state.data);
    return (
      <div className="App">
        <button onClick={() => this.getCurrentWeatherLondon()}>Click me</button>
        {this.state.test ? (
          <img
            src={`http://openweathermap.org/img/w/${
              this.state.data.weather[0].icon
            }.png`}
            alt="image"
          />
        ) : null}
      </div>
    );
  }
}

export default App;
