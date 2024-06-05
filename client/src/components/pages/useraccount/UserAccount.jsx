import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../../context/auth/AuthContext";
import Loading from "../../layout/Loading";
import InputItem from "./InputItem";
import "./UserAccount.css";

const UserAccount = () => {
  const history = useHistory();
  useEffect(() => {
    async function fetchData() {
      if (localStorage.token) await loadUser();
      else history.push("/");
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const authContext = useContext(AuthContext);
  const [state, setState] = useState();
  const [dis, setDis] = useState(true);
  const { loadUser, user, updateSettings, loading } = authContext;
  const onEdit = () => {
    setDis(!dis);
    setState(user);
  };
  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  return !user || loading ? (
    <Loading />
  ) : (
    <div className="user-account">
      <h1 className="header-text">Account Settings</h1>
      <div className="input-container">
        <InputItem
          label="First Name"
          type="text"
          name="FirstName"
          dis={dis}
          userProp={user.FirstName}
          stateProp={state ? state.FirstName : ""}
          onChange={onChange}
        />
        <InputItem
          label="LastName Name"
          type="text"
          name="LastName"
          dis={dis}
          userProp={user.LastName}
          stateProp={state ? state.LastName : ""}
          onChange={onChange}
        />
        <InputItem
          label="Email Address"
          type="Email"
          name="Email"
          dis={dis}
          userProp={user.Email}
          stateProp={state ? state.Email : ""}
          onChange={onChange}
        />
        <InputItem
          label="Phone Number"
          type="text"
          name="Phone"
          dis={dis}
          userProp={user.Phone}
          stateProp={state ? state.Phone : ""}
          onChange={onChange}
        />
        <InputItem
          label="Home Address"
          type="text"
          name="Address"
          dis={dis}
          userProp={user.Address}
          stateProp={state ? state.Address : ""}
          onChange={onChange}
        />
        <InputItem
          label="city"
          type="text"
          name="city"
          dis={dis}
          userProp={user.city}
          stateProp={state ? state.city : ""}
          onChange={onChange}
        />
        <InputItem
          label="Date Of Birth"
          type="date"
          name="date"
          dis={dis}
          userProp={user.date}
          stateProp={state ? state.date : ""}
          onChange={onChange}
        />
      </div>
      <div className="one-btn">
        <button className="btn btn-default" onClick={onEdit}>
          {dis ? "Edit" : "Cancel"}
        </button>
        {!dis && (
          <button
            className="btn btn-view"
            onClick={() => {
              setDis(!dis);
              updateSettings(state);
            }}
          >
            Update
          </button>
        )}
      </div>
    </div>
  );
};

export default UserAccount;
