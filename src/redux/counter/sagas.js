import { put, takeEvery, take, all, delay } from "redux-saga/effects";

// import { CounterActionTypes } from "./counter.types";

const dela = ms => new Promise(res => setTimeout(res, ms));

function* incrementAsync() {
  console.info("Increment Async!");
  console.log(dela);
  console.log(delay());
  yield dela(2000);
  yield put({ type: "INCREMENT" });
  // yield put(CounterActionTypes.INCREMENT);
}

export function* watchIncrementAsync() {
  yield takeEvery("ASYNC", incrementAsync);
}
