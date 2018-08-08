import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { render } from "react-testing-library";
import Select from "../src/exercises/Exercise3";

Enzyme.configure({ adapter: new Adapter() });

test("it renders the options correctly", () => {
  const users = [
    {
      id: 1,
      name: "John"
    },
    {
      id: 2,
      name: "Jane"
    }
  ];

  const { container } = render(<Select users={users} />);

  const select = container.children[0];
  expect(select.children[0].textContent).toEqual(users[0].name);
  expect(select.children[1].textContent).toEqual(users[1].name);
});

test("it renders options with the key prop set", () => {
  const users = [
    {
      id: 1,
      name: "John"
    },
    {
      id: 2,
      name: "Jane"
    }
  ];

  const wrapper = shallow(<Select users={users} />);

  const firstKey = Number(
    wrapper
      .children()
      .first()
      .key()
  );
  const secondKey = Number(
    wrapper
      .children()
      .at(1)
      .key()
  );

  expect(
    firstKey,
    "Expect the option item to have a unique `key` prop"
  ).not.toBe(null);
  expect(secondKey).not.toBe(null);
});
