/**
 * Exercise 3 - Looping
 *
 * Write a `Select` function component that takes a users array
 * with the prop name `users` having the shape
 * {id: number, name: string}
 *
 * The componenet should create the appropriate HTML
 * to display all the names in a dropdown.
 *
 * *NOTE* : You MUST use the `key` prop when iterating
 * over an array.
 */

import React from "react";

function Select(props) {
  return (
    <select>
      {props.users.map(user => {
        return <option key={user.id}>{user.name}</option>;
      })}
    </select>
  );
}

export default Select;
