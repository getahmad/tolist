import React, { Component } from "react";
import Button from "./Button";
import "../assets/css/formInput.css";

export default class FormInput extends Component {
  state = {
    text: "",
  };

  change = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  submit = (e) => {
    e.preventDefault();
    if (this.state.text !== "") {
      this.props.add(this.state.text);
    }
    this.setState({
      text: "",
    });
  };

  render() {
    return (
      <form style={inputFrom} onSubmit={this.submit}>
        <input
          onChange={this.change}
          type="text"
          value={this.state.text}
          placeholder="Add Task"
          style={input}
        />
        <Button text="add" variant="primary" action={this.submit} />
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
