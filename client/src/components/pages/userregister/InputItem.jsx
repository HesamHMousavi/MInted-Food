import React from "react";
import "../../../App.css";
import "./UserRegister.css";

const InputItem = ({ type, placeholder, name, onChange, label, value }) => {
  return (
    <div>
      <label htmlFor={name} className="label" style={{ textAlign: "start" }}>
        {label}
      </label>
      <input
        className="input"
        value={value}
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

export default InputItem;
