import React from "react";
import TodoList from "../src/exercises/Exercise4b";
import { render, fireEvent } from "react-testing-library";

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

test("it toggles a todo item", () => {
  const onChecked = jest.fn(item => {
    const todo = todos.find(todo => todo.id === item.id);
    todo.completed = !todo.completed;
  });

  const { container } = render(
    <TodoList todos={todos} onChecked={onChecked} />
  );

  const input = container.querySelector("input[type='checkbox']");

  fireEvent(
    input,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true
    })
  );

  expect(onChecked).toHaveBeenCalledTimes(1);
  expect(todos[0].completed).toBe(true);
});
