import HomeActionTypes from "./home.types";

const INITIAL_STATE = {
  showItem: true,
  value: 5
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HomeActionTypes.SHOW_ITEM:
      return {
        ...state,
        showItem: !state.showItem
      };

    case HomeActionTypes.ADD_ITEM:
      return {
        ...state,
        value: state.value + 1
      };

    case HomeActionTypes.MINUS_ITEM:
      return {
        ...state,
        value: state.value - 1
      };

    default:
      return state;
  }
};

export default cartReducer;
