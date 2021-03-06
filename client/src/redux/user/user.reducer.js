// import produce from "immer";

import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

// const userReducer = produce((draft, action) => {
//   switch (action.type) {
//     case UserActionTypes.GOOGLE_SIGN_IN_SUCCESS:
//       draft.currentUser = action.payload;
//       draft.error = null;
//       return;

//     case UserActionTypes.EMAIL_SIGN_IN_SUCCESS:
//       draft.currentUser = action.payload;
//       draft.error = null;
//       return;

//     case UserActionTypes.GOOGLE_SIGN_IN_FAILURE:
//       draft.error = action.payload;
//       return;

//     case UserActionTypes.EMAIL_SIGN_IN_FAILURE:
//       draft.error = action.payload;
//       return;

//     default:
//       return;
//   }
// }, INITIAL_STATE);

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };

    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };

    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      };

    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};

export default userReducer;
