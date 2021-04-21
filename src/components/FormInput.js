import React, { useState } from "react";
import Button from "./Button";
import "../assets/css/formInput.css";
import { useDispatch } from "react-redux";
import { addTask } from "../store/actions/task";


const FormInput = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const change = (e) => {
    setText(e.target.value);
  };

  const submit =  (e) => {
    e.preventDefault();
    const data={
      title:text,
    };
    if (text !== "") {
      dispatch(addTask(data))
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
