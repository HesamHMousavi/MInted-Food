import React, { useEffect, useContext, useState } from "react";
import HomeContext from "../../../context/home/HomeContext";
import InputItem from "../userregister/InputItem";
import Loading from "../../layout/Loading";
import { useHistory } from "react-router-dom";
import "../../../App.css";
const NewPassword = (props) => {
  const history = useHistory();
  const homeContext = useContext(HomeContext);
  const { changePass, validateLink, loading } = homeContext;
  const [state, setState] = useState({
    password: "",
    password2: "",
    res: null,
  });
  useEffect(() => {
    async function fetchData() {
      if (localStorage.token) localStorage.clear();
      const { id, token } = props.match.params;
      const res = await validateLink(id, token);
      setState({ ...state, res: res });
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onClick = async () => {
    const res = await changePass(
      props.match.params.id,
      props.match.params.token,
      state.password,
      state.password2
    );
    if (res === "Password Updated") history.push("/user/login");
  };
  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return loading ? (
    <Loading />
  ) : state.res !== true ? (
    <div className="flex-con">
      <h1 className="header-text">{state.res}</h1>
      <div style={{ zoom: "10" }}>😢</div>
    </div>
  ) : (
    <div className="flex-con">
      <h1 className="header-text">Change Password</h1>
      <InputItem
        name="password"
        label="Password"
        type="password"
        placeholder="Enter New Password"
        onChange={onChange}
        value={state.password}
      />
      <InputItem
        name="password2"
        label="Confirm Password"
        type="password"
        placeholder="Confirm Password"
        onChange={onChange}
        value={state.password2}
      />
      <button
        className="btn btn-view mg-1"
        style={{ width: "auto" }}
        onClick={onClick}
      >
        Change Password
      </button>
    </div>
  );
};

export default NewPassword;
