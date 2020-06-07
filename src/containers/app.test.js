import "../setupTest";
import React from "react";
import { Provider } from "react-redux";
import store from "../store/createStore";
import App from "./App";
import Header from "../components/Header";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import { shallow, mount } from "enzyme";

it("test App ", () => {
  const wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(wrapper.find(Header).length).toEqual(1);
  expect(wrapper.find(SearchBox).length).toEqual(1);
  expect(wrapper.find(Scroll).length).toEqual(1);
  //expect(wrapper).toMatchSnapshot();
});
