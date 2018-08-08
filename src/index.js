import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

/**
 * The exercise files require you to create different
 * types of components.
 *
 * After writing the components and the tests pass,
 * you have successfully completed the exercise and
 * may move on to the next one.
 */

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
