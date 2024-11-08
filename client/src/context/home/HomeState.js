import { useReducer, useContext } from "react";
import HomeContext from "./HomeContext";
import HomeReducer from "./HomeReducer";
import axios from "axios";
import ErrorContext from "../error/ErrorContext";
import joi from "@hapi/joi";
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
  SET_LOADING,
  REMOVE_LOADING,
} from "../types";

const HomeState = (props) => {
  const initialState = {
    searchField: "",
    filtered: null,
    basketToggle: false,
    currentCooke: null,
    addresses: [],
    total: 0,
    loading: false,
    items: [
      {
        id: 1,
        title: "this is the food 1 ",
        price: 5.99,
        count: 1,
      },
      {
        id: 2,
        title: "this is the food 2",
        price: 39.99,
        count: 1,
      },
    ],
    foodProv: [
      {
        id: 1,
        name: "Hesam",
        img: "https://media.istockphoto.com/photos/food-backgrounds-table-filled-with-large-variety-of-food-picture-id1155240408?k=6&m=1155240408&s=612x612&w=0&h=SEhOUzsexrBBtRrdaLWNB6Zub65Dnyjk7vVrTk1KQSU=",
        status: true,
        address: "32 Hmilton Road",
        review: 1,
        totalReview: 4749,
      },
      {
        id: 2,
        name: "dood",
        img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg?crop=0.669xw:1.00xh;0.173xw,0&resize=640:*",
        status: true,
        address: "3 burger avenu",
        review: 3,
        totalReview: 2403,
      },
      {
        id: 3,
        name: "jonny",
        img: "https://static01.nyt.com/images/2021/01/26/well/well-foods-microbiome/well-foods-microbiome-superJumbo.jpg",
        status: false,
        address: "18 lazy street fu1 3ot",
        review: 1,
        totalReview: 382,
      },
      {
        id: 4,
        name: "solu",
        img: "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/nourish_site_front_other/%201800x1200_raw_foods_diet_other.jpg",
        status: false,
        address: "13 snake road mv12 3ui",
        review: 1,
        totalReview: 1349,
      },
      {
        id: 5,
        name: "some cooke",
        img: "data:image/jpeg;base64,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",
        status: true,
        address: "65 darkwood street sj5 3os ",
        review: 4,
        totalReview: 1322,
      },
    ],
  };
  const errorContext = useContext(ErrorContext);
  const { setError } = errorContext;
  const [state, dispatch] = useReducer(HomeReducer, initialState);

  //Set searchField
  const setSearch = (text) => {
    dispatch({ type: SET_SEARCH, payload: text });
  };
  // Clear search
  const clearSearch = () => {
    dispatch({ type: CLEAR_SERACH });
  };

  //search
  const search = (text) => {
    if (text !== "") {
      //Checks if there is a value in the search box
      dispatch({ type: SEARCH, payload: text });
    } else {
      clearSearch();
    }
  };

  //Set Loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };
  //remove Loading
  const removeLoading = () => {
    dispatch({ type: REMOVE_LOADING });
  };

  //Set basekt Toggle
  const setBasketToggle = (bool) => {
    dispatch({ type: SET_TOGGLE, payload: bool });
  };

  //Set Current Cooke
  const setCurrentCooke = (id) => {
    dispatch({ type: SET_CURRENT_COOKE, payload: id });
  };
  //Updates the counter of the cart item in the basket
  const updateCount = (id, count) => {
    dispatch({ type: UPDATE_COUNT, payload: { id, count } });
    if (count === 0) {
      dispatch({ type: REMOVE_ITEM, payload: id });
    }
    claTotal();
  };

  //Calculates the total amount of the order
  const claTotal = () => {
    let total = 0;
    state.items.map((item) => (total += item.count * item.price));
    dispatch({ type: CAL_TOTAL, payload: total.toFixed(2) });
  };

  //Search address
  const searchAddress = async (address) => {
    const res = await axios.post("/api/address", { address });
    dispatch({ type: SET_ADDRESS, payload: res.data.result.hits });
  };
  //remove address arr
  const resetAddressArr = () => {
    dispatch({ type: RESET_ADDRESS_ARR });
  };

  //Reset Password
  const sendChangePassEmail = async (Email) => {
    try {
      setLoading();
      const res = await axios.post("/api/users/passwordreset", { Email });
      if (res.data === "Email Not Found") {
        setError(res.data);
        removeLoading();
        return false;
      }
      removeLoading();
      return true;
    } catch (err) {
      removeLoading();
      console.log(err.message);
      return false;
    }
  };
  // validate change password Link
  const validateLink = async (id, token) => {
    setLoading();
    const res = await axios.get(`/api/users/passwordreset/${id}/${token}`);
    removeLoading();
    return res.data;
  };

  //Change password
  const changePass = async (id, token, password, password2) => {
    if (password !== password2) return setError("Passwords Do Not Match");
    const passwordSchema = joi.object({
      password: joi.string().min(6).max(255),
    });
    const { error } = passwordSchema.validate({ password });
    if (error) return setError(error.details[0].message);
    const res = await axios.post(`/api/users/passwordreset/${id}/${token}`, {
      password,
    });
    return res.data;
  };

  return (
    <HomeContext.Provider
      value={{
        searchField: state.searchField,
        foodProv: state.foodProv,
        filtered: state.filtered,
        basketToggle: state.basketToggle,
        currentCooke: state.currentCooke,
        items: state.items,
        total: state.total,
        addresses: state.addresses,
        loading: state.loading,
        resetAddressArr,
        searchAddress,
        updateCount,
        setCurrentCooke,
        setBasketToggle,
        setSearch,
        search,
        claTotal,
        setLoading,
        changePass,
        sendChangePassEmail,
        validateLink,
        removeLoading,
      }}
    >
      {props.children}
    </HomeContext.Provider>
  );
};
export default HomeState;
