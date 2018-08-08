import React from "react";
import { render, fireEvent } from "react-testing-library";
import Button from "../src/exercises/Exercise1";

test("it must respond to clicks", () => {
  const onClick = jest.fn();

  const { container, getByText } = render(<Button onClick={onClick} />);

  fireEvent.click(getByText("Click Me"));

  expect(onClick).toHaveBeenCalledTimes(1);
  expect(container.firstChild.tagName.toLowerCase()).toEqual("button");
});
