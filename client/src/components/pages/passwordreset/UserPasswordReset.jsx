import React, { useState, useContext, useEffect } from "react";
import HomeContext from "../../../context/home/HomeContext";
import InputItem from "../userregister/InputItem";
import ErrorContext from "../../../context/error/ErrorContext";
import Loading from "../../layout/Loading";
import joi from "@hapi/joi";
import "../../../App.css";

const UserPasswordReset = () => {
  useEffect(() => {
    if (localStorage.token) localStorage.clear();
  }, []);
  const errorContext = useContext(ErrorContext);
  const { setError } = errorContext;
  const homeContext = useContext(HomeContext);
  const { sendChangePassEmail, loading } = homeContext;
  const [state, setState] = useState({
    show: false,
    Email: "",
  });
  const onChange = (e) => {
    setState({ ...state, Email: e.target.value });
  };
  const onClick = async () => {
    const emailSchema = joi.object({
      Email: joi.string().min(3).max(255).required().email(),
    });
    const { error } = emailSchema.validate({ Email: state.Email });
    if (error) if (error) return setError(error.details[0].message);
    const isEmail = await sendChangePassEmail(state.Email);
    if (isEmail) setState({ ...state, show: true });
  };
  return loading ? (
    <Loading />
  ) : (
    <div className="flex-con" style={{ padding: "2rem 0" }}>
      {state.show ? (
        <div className="show-email-sent">
          <i className="far fa-check-circle"></i>
          <h4>
            Email Sent <br />
            Check Your Inbox For Instructions
          </h4>
        </div>
      ) : (
        <h3 className="size-down">
          Enter The Email-Address Asociated With Your Account.
          <br />
          An Email Will Be Send Instructing You What To Do Next.
        </h3>
      )}
      <InputItem
        name="Email"
        label="Email Address"
        placeholder="Enter Your Email Address"
        value={state.Email}
        onChange={onChange}
      />
      <button className="btn btn-view" onClick={onClick}>
        Send
      </button>
    </div>
  );
};

export default UserPasswordReset;
