import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TodoList from "../src/exercises/Exercise4a";

Enzyme.configure({ adapter: new Adapter() });

const todos = [
  {
    id: 1,
    title: "Todo 1",
    completed: false
  },
  {
    id: 2,
    title: "Todo 2",
    completed: true
  },
  {
    id: 3,
    title: "Todo 3",
    completed: false
  }
];

test("it renders a list of todos", () => {
  const ul = shallow(<TodoList todos={todos} />);

  expect(ul.children().length).toEqual(3);
});

test("it renders the list of todos with the key prop", () => {
  const container = shallow(<TodoList todos={todos} />);

  container.childAt(0).forEach(li => {
    expect(li.key(), "Every li must has a unique `key` prop.").not.toBeNull();
  });
});
