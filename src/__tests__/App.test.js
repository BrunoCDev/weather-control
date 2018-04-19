import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

import Weather from "./../components/Weather";
import App from "./../App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const renderedComponent = ReactDOM.render(<App />, div);
  expect(renderedComponent).toMatchSnapshot();
  ReactDOM.unmountComponentAtNode(div);
});

describe("<App/>", () => {
  it("Should render Weather component", () => {
    const children = <Weather />;
    const renderedComponent = shallow(<div>{children}</div>);
    expect(renderedComponent.contains(children)).toEqual(true);
  });

  it("Should adopt the className", () => {
    const renderedComponent = shallow(<div className="App" />);
    expect(renderedComponent.find("div").hasClass("App")).toEqual(true);
  });
});
