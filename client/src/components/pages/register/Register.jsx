import React, { useContext, useState } from "react";
import InputItem from "../userregister/InputItem";
import AddressSearch from "../userregister/AddressSearch";
import HomeContext from "../../../context/home/HomeContext";
import AuthContext from "../../../context/auth/AuthContext";
import "./Register.css";
import "../../../App.css";

const Register = () => {
  const [state, setState] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Address: "",
    Phone: "",
    password: "",
    password2: "",
    city: "",
    date: "",
  });
  const homeContext = useContext(HomeContext);
  const authContext = useContext(AuthContext);
  const { cookeRegister } = authContext;
  const { addresses, searchAddress, resetAddressArr } = homeContext;
  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const setCityAndAdd = (city, Address) => {
    setState({ ...state, city, Address });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    cookeRegister(state);
  };
  return (
    <form onSubmit={onSubmit}>
      <h1 className="header-text">COOKE REGISTARTION</h1>
      <div className="input-container">
        <InputItem
          type="text"
          placeholder="First Name"
          name="FirstName"
          label="First Name"
          onChange={onChange}
          value={state.FirstName}
        />
        <InputItem
          type="text"
          placeholder="Last Name"
          name="LastName"
          label="Last Name"
          onChange={onChange}
          value={state.LastName}
        />
        <InputItem
          type="email"
          placeholder="Email@exapmle.eg"
          name="Email"
          label="Email Address"
          onChange={onChange}
          value={state.Email}
        />
        <InputItem
          type="password"
          placeholder="Enter Password"
          name="password"
          label="Password"
          onChange={onChange}
          value={state.password}
        />
        <InputItem
          type="password"
          placeholder="Confirm Password"
          name="password2"
          label="Confirm Password"
          onChange={onChange}
          value={state.password2}
        />
        <AddressSearch
          type="text"
          label="Search Address"
          placeholder="Search Address..."
          name="Address"
          addresses={addresses}
          searchAddress={searchAddress}
          resetAddressArr={resetAddressArr}
          value={state.Address}
          onChange={onChange}
          setCityAndAdd={setCityAndAdd}
        />
        <InputItem
          type="text"
          placeholder="City"
          name="city"
          label="City"
          onChange={onChange}
          value={state.city}
        />
        <InputItem
          type="text"
          placeholder="Phone Number"
          name="Phone"
          label="Phone Number"
          onChange={onChange}
          value={state.Phone}
        />
        <InputItem
          type="date"
          name="date"
          label="Date of Birth"
          onChange={onChange}
          value={state.date}
        />
      </div>
      <button className="btn btn-order reg-btn" onClick={onSubmit}>
        Register
      </button>
    </form>
  );
};
export default Register;
