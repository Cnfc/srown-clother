import { CartActionTypes } from "./cart.types";

const INITIAL_STATE = {
  cart: "do not trust me"
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.MY_NAME:
      return {
        ...state,
        cart: action.payload
      };

    default:
      return state;
  }
};

export default userReducer;
