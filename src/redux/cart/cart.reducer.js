import { CartActionTypes } from "./cart.types";

const INITIAL_STATE = {
  howMany: "do not trust me"
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.MY_NAME:
      return {
        ...state,
        howMany: action.payload
      };

    default:
      return state;
  }
};

export default userReducer;
