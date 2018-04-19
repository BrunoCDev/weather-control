import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Enzyme from "enzyme";
import { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

import Weather from "./../components/Weather";
import App from "./../App";
import { list, finalData } from "./../App.data";

it("Renders without crashing", () => {
  const div = document.createElement("div");
  const renderedComponent = ReactDOM.render(<App />, div);
  expect(renderedComponent).toMatchSnapshot();
  ReactDOM.unmountComponentAtNode(div);
});

describe("<App/>", () => {
  it("Should render App", () => {
    const wrapper = mount(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it("parseWeatherInformation should work properly", () => {
    const wrapper = mount(<App />);
    expect(wrapper.instance().parseWeatherInformation(list)).toEqual(finalData);
  });

  it("Should render nested components", () => {
    const children = <div />;
    const renderedComponent = mount(<div>{children}</div>);
    expect(renderedComponent.contains(children)).toEqual(true);
  });

  it("Should adopt the className", () => {
    const renderedComponent = mount(<div className="App" />);
    expect(renderedComponent.find("div").hasClass("App")).toEqual(true);
  });
});
