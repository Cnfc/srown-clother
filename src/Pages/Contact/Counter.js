import React from "react";
import { connect } from "react-redux";
import {
  increment,
  decrement,
  onIncrementAsync
} from "redux/counter/counter.action";

const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync }) => (
  <div>
    <button onClick={onIncrement}>Increment</button>{" "}
    <button onClick={onDecrement}>Decrement</button>
    <button onClick={onIncrementAsync}>INcrement After 1 sec</button>
    <hr />
    <div>Clicked: {value} times</div>
  </div>
);

const mapState = state => ({
  value: state.counter.value
});

const mapDispatch = dispatch => ({
  onIncrement: () => dispatch(increment()),
  onDecrement: () => dispatch(decrement()),
  onIncrementAsync: () => dispatch(onIncrementAsync())
});
export default connect(mapState, mapDispatch)(Counter);
