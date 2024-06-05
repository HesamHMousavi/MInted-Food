import React, { useReducer, useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import ErrorContext from "../error/ErrorContext";
import HomeContext from "../home/HomeContext";
import axios from "axios";
import joi from "@hapi/joi";
import jwt_decode from "jwt-decode";
import { SET_USER, REMOVE_USER, SET_COOKE, REMOVE_COOKE } from "../types";

const AuthState = (props) => {
  const history = useHistory();
  const initialState = {
    cookeAuth: null,
    isAuthenticated: null,
    user: null,
    cooke: null,
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  const errorContext = useContext(ErrorContext);
  const homeContext = useContext(HomeContext);
  const { setLoading, removeLoading } = homeContext;
  const { setError, setAlert } = errorContext;
  //LOGIN FUNC

  const userLogin = async (User) => {
    const userSchema = joi.object({
      password: joi.string().min(6).max(255).required(),
      Email: joi.string().min(3).max(255).required().email(),
    });
    if (User.password === "" || User.Email === "")
      return setError("Fill in all boxes Please");
    const { error } = userSchema.validate(User);
    if (error) return setError(error.details[0].message);
    setLoading();
    try {
      const res = await axios.post("/api/users/login", User);
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        history.push("/user/home");
      } else {
        setError(res.data);
      }
    } catch (error) {
      console.error(error);
    }
    removeLoading();
  };

  //Load user
  const loadUser = async () => {
    if (localStorage.token) {
      axios.defaults.headers.common["x-auth-token"] = localStorage.token;
    } else {
      delete axios.defaults.headers.common["x-auth-token"];
      return 0;
    }
    try {
      setLoading();
      const res = await axios.get("/api/users");
      if (res.data.err) {
        localStorage.removeItem("token");
        history.push("/");
        removeLoading();
        alert(res.data.err);
        return 0;
      }
      dispatch({ type: SET_USER, payload: res.data });
    } catch (err) {
      console.log(err);
    }
    removeLoading();
  };

  //USER REGISTER
  const userRegister = async (User) => {
    const userSchema = joi.object({
      FirstName: joi.string().min(3).max(255).required(),
      LastName: joi.string().min(3).max(255).required(),
      password: joi.string().min(6).max(255).required(),
      password2: joi.string().min(6).max(255).required(),
      Address: joi.string().min(6).max(255).required(),
      Phone: joi.string().min(11).max(255).required(),
      date: joi.string().min(10).max(255).required(),
      city: joi.string().min(3).max(255).required(),
      Email: joi.string().min(3).max(255).required().email(),
    });
    const { error } = userSchema.validate(User);
    if (User.password !== User.password2)
      return setError("passwords do not match");
    if (error) {
      setError(error.details[0].message);
      setError("Please Fill In All Fields");
      return 0;
    }
    const firstName =
      User.FirstName[0].toUpperCase() + User.FirstName.toLowerCase().slice(1);
    User.FirstName = firstName;
    const lastName =
      User.LastName[0].toUpperCase() + User.LastName.toLowerCase().slice(1);
    User.LastName = lastName;

    try {
      delete User.password2;
      if (localStorage.token) localStorage.clear();
      history.push("/user/login");
      const res = await axios.post("/api/users", User);
      console.log();
      setAlert(...res.data);
    } catch (err) {
      console.log(err);
    }
  };

  //set loading

  //log out
  const logOut = () => {
    dispatch({ type: REMOVE_USER });
    setAlert("You Logged Out");
    history.push("/");
  };
  const logOutCooke = () => {
    dispatch({ type: REMOVE_COOKE });
    setAlert("You Logged Out");
    history.push("/");
  };

  //update user settings
  const updateSettings = async (User) => {
    const userSchema = joi.object({
      Email: joi.string().min(3).max(255).required().email(),
      FirstName: joi.string().min(3).max(255).required(),
      LastName: joi.string().min(3).max(255).required(),
      Address: joi.string().min(6).max(255).required(),
      Phone: joi.string().min(11).max(255).required(),
      date: joi.string().min(10).max(255).required(),
      city: joi.string().min(3).max(255).required(),
      password: joi.string(),
      _id: joi.string(),
      __v: joi.number(),
    });
    const { error } = userSchema.validate(User);
    if (error) {
      setError("Please Fill In All Fields");
      return setError(error.details[0].message);
    }
    try {
      setLoading();
      const res = await axios.put("/api/users", {
        oldUser: state.user,
        newUser: User,
      });
      if (res.data === "Account Updated") setAlert(res.data);
      else setError(res.data);
      loadUser();
    } catch (err) {
      console.log(err);
    }
    removeLoading();
  };

  //Cooke Register
  const cookeRegister = async (cooke) => {
    if (cooke.password !== cooke.password2)
      return setError("Passwords Do Not Match !!");
    const cookeSchema = joi.object({
      FirstName: joi.string().min(3).max(255).required(),
      LastName: joi.string().min(3).max(255).required(),
      Email: joi.string().min(3).max(255).required().email(),
      password: joi.string().min(3).max(255).required(),
      password2: joi.string().min(3).max(255).required(),
      Address: joi.string().min(5).max(255).required(),
      Phone: joi.string().min(11).max(11).required(),
      city: joi.string().min(3).max(255).required(),
      date: joi.string().required(),
    });
    const { error } = cookeSchema.validate(cooke);
    if (error) {
      setError("Plsease Fill in All Fields");
      return setError(error.details[0].message);
    }
    const res = await axios.post("/api/cookes", { cooke });
    setAlert(res.data);
    // history.push("/cooke/login");
  };

  //Cooke Login
  const cookeLogin = async (User) => {
    const userSchema = joi.object({
      password: joi.string().min(6).max(255).required(),
      Email: joi.string().min(3).max(255).required().email(),
    });
    if (User.password === "" || User.Email === "")
      return setError("Fill in all boxes Please");
    const { error } = userSchema.validate(User);
    if (error) return setError(error.details[0].message);
    setLoading();
    try {
      const res = await axios.post("/api/cookes/login", User);
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        history.push("/cooke/home");
      } else {
        setError(res.data);
      }
    } catch (error) {
      console.error(error);
    }
    removeLoading();
  };
  // load cooke
  const loadCooke = async () => {
    if (localStorage.token)
      axios.defaults.headers.common["x-auth-token"] = localStorage.token;
    else delete axios.defaults.headers.common["x-auth-token"];
    const res = await axios.get("/api/cookes");
    dispatch({ type: SET_COOKE, payload: res.data });
  };
  const checkAuth = () => {
    if (localStorage.token) {
      const decoded = jwt_decode(localStorage.token);
      return decoded.type;
    }
  };
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        cookeAuth: state.cookeAuth,
        cooke: state.cooke,
        cookeRegister,
        updateSettings,
        cookeLogin,
        userLogin,
        userRegister,
        loadUser,
        loadCooke,
        logOutCooke,
        logOut,
        checkAuth,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthState;
