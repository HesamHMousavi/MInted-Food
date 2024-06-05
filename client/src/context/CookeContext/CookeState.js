import { useReducer } from "react";
import CookeReducer from "./CookeReducer";
import CookeContext from "./CookeContext";

const CookeState = (props) => {
  const initalState = {
    incomingOrders: [1,1],
  };
  const [state, dispatch] = useReducer(CookeReducer, initalState);

  return (
    <CookeContext.Provider
      value={{
        incomingOrders: state.incomingOrders,
      }}
    >
      {props.children}
    </CookeContext.Provider>
  );
};

export default CookeState;
