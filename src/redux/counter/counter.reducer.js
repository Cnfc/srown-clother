/* eslint-disable default-case */
// import CounterActionTypes from "./counter.types";
import produce from "immer";
import CounterActionTypes from "./counter.types";

const INITIAL_STATE = {
  value: 0,
  me: 0
};

const CounterReducer = produce((draft, action) => {
  switch (action.type) {
    case CounterActionTypes.INCREMENT:
      draft.value = draft.value + 1;
      return;

    case CounterActionTypes.DECREMENT:
      draft.value = draft.value - 1;
      return;

    case CounterActionTypes.ASYNC:
      // draft.me = draft.me + 1;
      return;

    default:
      return;
  }
}, INITIAL_STATE);

export default CounterReducer;

// case 'INCREMENT_IF_ODD':
// return (state % 2 !== 0) ? state + 1 : state
