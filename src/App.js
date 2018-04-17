import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import ScrollArea from "react-scrollbar";
import moment from "moment";

class App extends Component {
  constructor() {
    super();
    this.state = {
      city: "London",
      date: {},
      loading: true,
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
    this.parseWeatherInformation = this.parseWeatherInformation.bind(this);
  }

  componentDidMount() {
    axios
      .post("http://localhost:3005/api/get/london", { city: this.state.city })
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

  render() {
    const { city, week } = this.state;
    console.log(this.state);
    return (
      <div className="App">
        {!this.state.loading ? (
          <div className="main-container">
            <div className="title-container">
              <strong className="title">
                {city.name}, {city.country}
              </strong>
            </div>
            <ScrollArea
              className="area"
              contentClassName="content"
              speed={0.8}
              vertical={false}
            >
              {this.state.date.map((info, i) => {
                const el = info.info;
                const date = el.dt_txt.split(" ");
                const time = date[1].slice(0, 5);
                return (
                  <div key={i} className="instance-container">
                    <p className="date">{week[info.weekDay]}</p>
                    <p className="time"> {time}</p>
                    <img
                      className="icon"
                      src={`http://openweathermap.org/img/w/${
                        el.weather[0].icon
                      }.png`}
                      alt={el.weather[0].main}
                    />
                    <p className="description">{el.weather[0].description}</p>
                    <p className="temp">
                      {Math.round(el.main.temp - 273.15)}°C{" "}
                    </p>
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
