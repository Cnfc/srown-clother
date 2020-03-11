// import CounterActionTypes from "./counter.types";

const INITIAL_STATE = {
  isLoading: false,
  err: null,
  posts: []
};

const CounterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_POSTS_BEGIN":
      return {
        ...state,
        isLoading: true,
        err: null
      };

    case "GET_POSTS_SUCCESS":
      return {
        ...state,
        posts: action.posts,
        isLoading: false
      };

    case "GET_POSTS_ERROR":
      return {
        ...state,
        isLoading: false,
        err: action.err
      };

    default:
      return state;
  }
};

export default CounterReducer;
