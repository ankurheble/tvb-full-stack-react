import React from "react";
import { render } from "react-testing-library";
import Button from "../src/exercises/Exercise2";

test("it renders children correctly", () => {
  const text = "Yolo!";

  const { container } = render(<Button>{text}</Button>);

  expect(container.textContent).toEqual(text);
});
