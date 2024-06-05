import React, { useState } from "react";
import "../../../App.css";
import "./UserRegister.css";

const AddressSearch = ({
  type,
  placeholder,
  name,
  onChange,
  label,
  searchAddress,
  addresses,
  setCityAndAdd,
  resetAddressArr,
}) => {
  const [add, setAdd] = useState("");
  const onClick = (city, address) => {
    setAdd(address);
    setCityAndAdd(city, address);
    resetAddressArr();
  };
  const onChangeValue = (e) => {
    setAdd(e.target.value);
    searchAddress(e.target.value);
  };
  return (
    <div>
      <label htmlFor={name} className="label" style={{ textAlign: "start" }}>
        {label}
      </label>
      <input
        className="input"
        type={type}
        placeholder={placeholder}
        name={name}
        onInput={onChangeValue}
        value={add}
        onChange={onChange}
      />
      <div className="address">
        {addresses.length > 0 &&
          addresses.map((item, id) => (
            <div
              onClick={() =>
                onClick(item.district, `${item.line_1} , ${item.postcode}`)
              }
              className="address-item"
              key={id}
            >
              {item.line_1} , {item.district} , {item.postcode}
            </div>
          ))}
      </div>
    </div>
  );
};

export default AddressSearch;
