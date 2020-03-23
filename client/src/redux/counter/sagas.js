import {
  put,
  takeEvery
  //  take, all, call
} from "redux-saga/effects";

// import { CounterActionTypes } from "./counter.types";

const delay = ms => new Promise(res => setTimeout(res, ms));

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
