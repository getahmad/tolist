import FormInput from "./components/FormInput";
import TodoItem from "./components/TodoItem";
import Logo from "./assets/images/logo.png";
import "./assets/css/styles.css";
import React, { Component } from "react";

export default class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "reading",
      },
      {
        id: 2,
        title: "workout",
      },
    ],
  };
  render() {
    const {todos} = this.state
    return (
      <div className="app">
        <div className="logo">
          <img src={Logo} alt="" />
          <h3>Task List</h3>
        </div>
        <div className="list">
          {todos.map((item) => (
            <TodoItem key={item.id} todo={item} />
          ))}
        </div>
        <div className="input-form">
          <FormInput />
        </div>
      </div>
    );
  }
}
