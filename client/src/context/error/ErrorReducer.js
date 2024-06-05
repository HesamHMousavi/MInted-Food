import { SET_ERROR, REMOVE_ERROR, SET_ALERT, REMOVE_ALERT } from "../types";

const ErrorReducer = (state, action) => {
  switch (action.type) {
    default:
      return {
        ...state,
      };
    case SET_ERROR: {
      return {
        ...state,
        errors: [...state.errors, action.payload],
      };
    }
    case REMOVE_ERROR:
      return {
        ...state,
        errors: state.errors.filter((err) => err.id !== action.payload),
      };
    case SET_ALERT: {
      return {
        ...state,
        alerts: [...state.alerts, action.payload],
      };
    }
    case REMOVE_ALERT:
      return {
        ...state,
        alerts: state.alerts.filter((alrt) => alrt.id !== action.payload),
      };
  }
};
export default ErrorReducer;
