import {
  GET_USER,
  SET_USER,
  REMOVE_USER,
  SET_COOKE,
  REMOVE_COOKE,
} from "../types";

const AuthReducer = (state, action) => {
  switch (action.type) {
    default:
      return { ...state };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SET_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case REMOVE_USER:
      if (localStorage.token) localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    case SET_COOKE: {
      return {
        ...state,
        cookeAuth: true,
        cooke: action.payload,
        isAuthenticated: null,
        user: null,
      };
    }
    case REMOVE_COOKE: {
      if (localStorage.token) localStorage.clear();
      return {
        ...state,
        cookeAuth: false,
        cooke: null,
      };
    }
  }
};
export default AuthReducer;
