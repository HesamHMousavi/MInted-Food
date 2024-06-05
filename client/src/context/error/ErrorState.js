import { useReducer } from "react";
import ErrorReducer from "./ErrorReducer";
import ErrorContext from "./ErrorContext";
import { v4 as uuid } from "uuid";
import { SET_ERROR, REMOVE_ERROR, SET_ALERT, REMOVE_ALERT } from "../types";

const ErrorState = (props) => {
  const initialState = {
    errors: [],
    alerts: [],
  };
  const [state, dispatch] = useReducer(ErrorReducer, initialState);

  //Set error

  const setError = (msg, timeout = 5000) => {
    const id = uuid();
    dispatch({ type: SET_ERROR, payload: { msg, id } });
    setTimeout(() => dispatch({ type: REMOVE_ERROR, payload: id }), timeout);
  };

  //Set alret
  const setAlert = (msg, timeout = 5000) => {
    const id = uuid();
    dispatch({ type: SET_ALERT, payload: { msg, id } });
    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
  };

  return (
    <ErrorContext.Provider
      value={{ errors: state.errors, alerts: state.alerts, setError, setAlert }}
    >
      {props.children}
    </ErrorContext.Provider>
  );
};

export default ErrorState;
