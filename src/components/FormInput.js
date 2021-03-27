import React, { Component } from "react";
import Button from "./Button";
import "../assets/css/formInput.css"

export default class FormInput extends Component {
  render() {
    return (
      <form style={inputFrom}>
        <input type="text" placeholder="Add Task" style={input} />
        <Button text="add" variant="primary" />
      </form>
    );
  }
}

const inputFrom = {
  background: "#ffffff",
  color: "#ffffff",
  display: "flex",
  alignItems: "center",
  height: "3rem",
  padding: "0 1rem",
  justifyContent: "space-between",
  margin: "0.5rem 0",
};

const input = {
  width: "70%",
  border: "none",
};
