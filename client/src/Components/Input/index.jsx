import React from "react";
import "./input.css";

const Input = (props) => {
  return (
      <input
      className="inputs"
       {...props}
      />
  );
};

export default Input;
