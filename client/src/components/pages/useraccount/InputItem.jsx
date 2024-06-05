import React from "react";
import "./UserAccount.css";

const InputItem = ({
  name,
  dis,
  userProp,
  stateProp,
  onChange,
  type,
  label,
}) => {
  return (
    <div className="con">
      <label htmlFor="FirstName" className="label">
        {label}
      </label>
      <input
        disabled={dis}
        type={type}
        className="mat-input"
        name={name}
        value={dis ? userProp : stateProp}
        onChange={onChange}
      />
    </div>
  );
};

export default InputItem;
