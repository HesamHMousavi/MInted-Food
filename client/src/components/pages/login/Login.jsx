import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../../../context/auth/AuthContext";
import HomeContext from "../../../context/home/HomeContext";
import Loading from "../../layout/Loading";
import { useHistory } from "react-router";
import "../../../App.css";
const Login = () => {
  const homeContext = useContext(HomeContext);
  const authContext = useContext(AuthContext);
  const { loading } = homeContext;
  const { cookeLogin, checkAuth } = authContext;
  const [user, setUser] = useState({
    Email: "",
    password: "",
  });
  const history = useHistory();
  const type = checkAuth();
  useEffect(() => {
    if (localStorage.token && type === "cooke") history.push("/cooke/home");
  });
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return loading ? (
    <Loading />
  ) : (
    <div className="flex-con">
      <h1 className="header-text">Cooke Login</h1>
      <input
        value={user.Email}
        onChange={onChange}
        type="Email"
        name="Email"
        placeholder="Email@exapmle.com"
        className="input"
      />
      <input
        value={user.password}
        onChange={onChange}
        name="password"
        type="password"
        placeholder="Password"
        className="input"
      />
      <button className="btn btn-view reg-btn" onClick={() => cookeLogin(user)}>
        Log in
      </button>
    </div>
  );
};

export default Login;
