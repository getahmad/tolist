import React, { useState } from "react";
import Button from "./Button";
import "../assets/css/formInput.css";
import axios from "axios";
const baseUrl="https://my-udemy-api.herokuapp.com/api/v1"

const FormInput = ({ add }) => {
  const [text, setText] = useState("");

  const change = (e) => {
    setText(e.target.value);
  };

  const submit = async (e) => {
    e.preventDefault();
    const newTodo={
      title:text,
    };
    const token= localStorage.getItem("token")
    if (text !== "") {
      const res = await axios.post(`${baseUrl}/todo`,newTodo,{
        headers: {
          "Authorization":token
        }
      })
      // console.log(res);
      add(res.data.todo);
    }
    setText("");
  };

  return (
    <form style={inputFrom} onSubmit={submit}>
      <input
        onChange={change}
        type="text"
        value={text}
        placeholder="Add Task"
        style={input}
      />
      <Button text="add" variant="primary" action={submit} />
    </form>
  );
};

export default FormInput;

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
