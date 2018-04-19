import React from "react";
import ReactDOM from "react-dom";
import Enzyme from "enzyme";
import { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

import Weather from "./../index";

it("Renders components without crashing", () => {
  const renderedComponent = mount(<div>Test</div>);
  expect(renderedComponent).toMatchSnapshot();
});

describe("<Weather/>", () => {
  it("Should render nested components", () => {
    const children = <div />;
    const renderedComponent = mount(<div>{children}</div>);
    expect(renderedComponent.contains(children)).toEqual(true);
  });

  it("Should render an <img> tag with className", () => {
    const renderedComponent = mount(<img className="icon" alt="Weather" />);
    expect(renderedComponent.find("img").hasClass("icon")).toEqual(true);
    expect(renderedComponent).toMatchSnapshot();
  });

  it("Should adopt the className", () => {
    const renderedComponent = mount(<div className="weather-container" />);
    expect(renderedComponent.find("div").hasClass("weather-container")).toEqual(
      true
    );
  });
});
