import React from "react";

const Input = ({ placeholder, type, change, value }) => {
  return (
    <input
      style={myInput}
      type={type}
      placeholder={placeholder}
      onChange={change}
      value={value}
    />
  );
};

export default Input;

const myInput = {
  width: "80%",
  border: "none",
  borderBottom: "1px solid #57ae4f",
  marginBottom: "2rem",
  marginLeft: "2rem"
}
