import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: null,
      city: null,
      test: false
      // data: {},
      // date: null,
      // temp: {},
      // icon: "",
      // description: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3005/api/get/london")
      .then(response => {
        const { data } = response;
        this.setState({
          city: data.city,
          list: data.list,
          test: true
          // data: data,
          // date: new Date(data.dt * 1000),
          // temp: data.main,
          // icon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
          // description: data.weather[0].description,
          // city: data.name,
        });
      })
      .catch(console.log);
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        {this.state.test ? (
          <div>
            <div>
              <p>
                {this.state.city.name}, {this.state.city.country}
              </p>
            </div>
            {this.state.list.map((el, i) => {
              return (
                <div key={i}>
                  <p>{el.dt_txt}</p>
                  <p>{el.weather[0].description}</p>
                  <p>{Math.round(el.main.temp - 273.15)}°C </p>
                  <img
                    src={`http://openweathermap.org/img/w/${
                      el.weather[0].icon
                    }.png`}
                    alt={el.weather[0].main}
                  />
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
