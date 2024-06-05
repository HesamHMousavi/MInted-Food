import {
  SET_SEARCH,
  SEARCH,
  CLEAR_SERACH,
  SET_TOGGLE,
  SET_CURRENT_COOKE,
  UPDATE_COUNT,
  REMOVE_ITEM,
  CAL_TOTAL,
  SET_ADDRESS,
  RESET_ADDRESS_ARR,
  REMOVE_LOADING,
  SET_LOADING
} from "../types";

const HomeReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
    case SET_SEARCH:
      return {
        ...state,
        searchField: action.payload,
      };
    case SEARCH:
      return {
        ...state,
        filtered: state.foodProv.filter((element) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return element.name.match(regex);
        }),
      };
    case CLEAR_SERACH:
      return {
        ...state,
        filtered: null,
      };
    case SET_TOGGLE:
      return {
        ...state,
        basketToggle: action.payload,
      };
    case SET_CURRENT_COOKE:
      return {
        ...state,
        currentCooke: state.foodProv.filter((ele) => ele.id === action.payload),
      };
    case UPDATE_COUNT:
      return {
        ...state,
        items: state.items.map((ele) => {
          if (ele.id === action.payload.id) ele.count = action.payload.count;
          return ele;
        }),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case CAL_TOTAL:
      return {
        ...state,
        total: action.payload,
      };
    case SET_ADDRESS:
      return {
        ...state,
        addresses: action.payload,
      };
    case RESET_ADDRESS_ARR:
      return {
        ...state,
        addresses: [],
      };
    case REMOVE_LOADING:
      return {
        ...state,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
  }
};

export default HomeReducer;
