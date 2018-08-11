/**
 * Exercise 1 - function components & props
 *
 * Create a function component called `Button` that accepts
 * one prop 'onClick' which is a function.
 *
 * When the button is clicked, the 'onClick'
 * function must be called.
 * */

import React from "react";

function Button(props) {
  return <button onClick={props.onClick}>Click Me</button>;
}
// uncomment the line below to export this component
export default Button;
