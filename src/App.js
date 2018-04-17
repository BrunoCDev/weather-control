import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import ScrollArea from "react-scrollbar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: null,
      city: null,
      loading: true
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
          day: "",
          loading: false
        });
      })
      .catch(console.log);
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        {!this.state.loading ? (
          <div className="main-container">
            <div className="title-container">
              <strong className="title">
                {this.state.city.name}, {this.state.city.country}
              </strong>
            </div>
            <ScrollArea
              className="area"
              contentClassName="content"
              speed={0.8}
              vertical={false}
            >
              {this.state.list.map((el, i) => {
                const date = el.dt_txt.split(" ");
                const time = date[1].slice(0, 5);
                return (
                  <div key={i} className="instance-container">
                    <div className="date-container">
                      <p className="date">{date[0]}</p>
                    </div>
                    <div className="time-container">
                      <p className="time"> {time}</p>
                    </div>
                    <div className="description-container">
                      <p className="description">{el.weather[0].description}</p>
                    </div>
                    <div className="temp-container">
                      <p className="temp">
                        {Math.round(el.main.temp - 273.15)}°C{" "}
                      </p>
                    </div>
                    <div className="icon-container">
                      <img
                        className="icon"
                        src={`http://openweathermap.org/img/w/${
                          el.weather[0].icon
                        }.png`}
                        alt={el.weather[0].main}
                      />
                    </div>
                  </div>
                );
              })}
            </ScrollArea>
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
