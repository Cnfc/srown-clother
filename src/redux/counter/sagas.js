import { put, takeEvery, delay, take, all, call } from "redux-saga/effects";

// import { CounterActionTypes } from "./counter.types";

// const delay = ms => new Promise(res => setTimeout(res, ms));

// function* incrementAsync() {
//   console.info("Increment Async!");
//   yield take({ type: "INCREMENT" });
//   console.log(dela);
//   console.log(delay());
//   yield dela(2000);
//   // yield put(CounterActionTypes.INCREMENT);
// }

// export function* watchIncrementAsync() {
//   yield take("INCREMENT");
//   console.log("ONNN");
// }
export function* helloSaga() {
  console.log("IAM INCREMENTED!");
  yield delay(3000);
  yield put({ type: "INCREMENT" });
}

// export function* incrementAsync() {
//   yield put({ type: "ASYNC" });
// }

export function* watchIncrementAsync() {
  yield takeEvery("ASYNC", helloSaga);
}
