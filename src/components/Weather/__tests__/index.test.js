import React from "react";
import ReactDOM from "react-dom";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

import Weather from "./../index";

it("Renders components without crashing", () => {
  const renderedComponent = shallow(<div>Test</div>);
  expect(renderedComponent).toMatchSnapshot();
});

describe("<Weather/>", () => {
  it("Should render nested components", () => {
    const children = <div />;
    const renderedComponent = shallow(<div>{children}</div>);
    expect(renderedComponent.contains(children)).toEqual(true);
  });

  it("Should adopt the className", () => {
    const renderedComponent = shallow(<div className="weather-container" />);
    expect(renderedComponent.find("div").hasClass("weather-container")).toEqual(
      true
    );
  });
});
