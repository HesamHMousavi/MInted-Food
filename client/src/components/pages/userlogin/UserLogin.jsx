import React, { useContext, useState, Fragment, useEffect } from "react";
import AuthContext from "../../../context/auth/AuthContext";
import HomeContext from "../../../context/home/HomeContext";
import { useHistory } from "react-router-dom";
import Loading from "../../layout/Loading";

import "../../../App.css";

const UserLogin = (props) => {
  const history = useHistory();
  const homeContext = useContext(HomeContext);
  const authContext = useContext(AuthContext);
  const { loading } = homeContext;
  const { userLogin, checkAuth } = authContext;
  useEffect(() => {
    const type = checkAuth();
    if (localStorage.token && type === "user") props.history.push("/user/home");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [user, setUser] = useState({
    Email: "",
    password: "",
  });
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onClick = (e) => {
    e.preventDefault();
    userLogin(user);
  };
  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex-con">
          <h1 className="header-text">Customer Login</h1>
          <input
            type="Email"
            name="Email"
            className="input"
            placeholder="Enter Email"
            onChange={onChange}
            value={user.Email}
          />
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
            onChange={onChange}
            value={user.password}
          />
          <h4
            className="res-pass"
            onClick={() => history.push("/user/passwordreset")}
          >
            Forgotton Password ? Reset Paasowrd
          </h4>
          <button className="btn btn-view reg-btn" onClick={onClick}>
            Login
          </button>
        </div>
      )}
    </Fragment>
  );
};
export default UserLogin;
