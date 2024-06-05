import React, { useContext, useState } from "react";
import AuthContext from "../../../context/auth/AuthContext";
import InputItem from "./InputItem";
import AddressSearch from "./AddressSearch";
import HomeContext from "../../../context/home/HomeContext";

const UserRegister = () => {
  const homeContext = useContext(HomeContext);
  const { addresses, searchAddress, resetAddressArr } = homeContext;
  const authContext = useContext(AuthContext);
  const { userRegister } = authContext;
  const [user, setUser] = useState({
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
  const setCityAndAdd = (city, Address) => {
    setUser({ ...user, city, Address });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    userRegister(user);
  };
  const onChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <form onSubmit={onSubmit}>
      <h1 className="header-text">CUSTOMER REGISTARTION</h1>
      <div className="input-container">
        <InputItem
          type="text"
          label="First Name"
          placeholder="First Name"
          name="FirstName"
          onChange={onChange}
        />
        <InputItem
          type="text"
          label="Last Name"
          placeholder="Last Name"
          name="LastName"
          onChange={onChange}
        />
        <InputItem
          type="Email"
          label="Email Address"
          placeholder="Email Address"
          name="Email"
          onChange={onChange}
        />
        <InputItem
          type="password"
          label="Password"
          placeholder="password"
          name="password"
          onChange={onChange}
        />
        <InputItem
          type="password"
          label="Confirm Password"
          placeholder="Confirm password"
          name="password2"
          onChange={onChange}
        />
        <AddressSearch
          type="text"
          label="Search Address"
          placeholder="Search Addrss..."
          name="Address"
          addresses={addresses}
          searchAddress={searchAddress}
          value={user.Address}
          onChange={onChange}
          setCityAndAdd={setCityAndAdd}
          resetAddressArr={resetAddressArr}
        />
        <InputItem
          type="text"
          label="City"
          placeholder="City"
          name="city"
          value={user.city}
          onChange={onChange}
        />
        <InputItem
          type="text"
          label="Phone Number"
          placeholder="Phone"
          name="Phone"
          onChange={onChange}
        />
        <InputItem
          type="date"
          label="Birth Date"
          placeholder="Date"
          name="date"
          onChange={onChange}
        />
      </div>
      <button className="btn btn-order reg-btn">Register</button>
    </form>
  );
};

export default UserRegister;
