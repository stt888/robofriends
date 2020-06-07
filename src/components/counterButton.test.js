import "../setupTest";
import React from "react";
import CounterButton from "./CounterButton";
import { shallow, mount } from "enzyme";

it("test button tag", () => {
  const wrapper = shallow(<CounterButton />);
  expect(wrapper.length).toEqual(1);
  //expect(wrapper).toMatchSnapshot();
});

it("test button click function", () => {
  const counterButton = mount(<CounterButton />);
  expect(counterButton.state("count")).toEqual(1);
  //counterButton.update();
  counterButton.find("button").simulate("click");
  expect(counterButton.state("count")).toEqual(2);
});

it("test shouldComponentUpdate", () => {
  const counterButton = mount(<CounterButton />);
  expect(counterButton.state("count")).toEqual(1);
  const funUpdate = jest.spyOn(
    CounterButton.prototype,
    "shouldComponentUpdate"
  );
  counterButton.setState({ count: 1 });
  expect(funUpdate).toBeCalled();
});
