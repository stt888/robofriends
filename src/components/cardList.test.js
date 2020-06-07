import "../setupTest";
import React from "react";
import CardList from "./CardList";
import { shallow } from "enzyme";

it("test card", () => {
  const mockRobots = [
    {
      id: 1,
      name: "Navigation",
      email: "john@krgnl.com"
    }
  ];
  const wrapper = shallow(<CardList robots={mockRobots} />);
  expect(wrapper.length).toEqual(1);
  expect(wrapper).toMatchSnapshot();
});
