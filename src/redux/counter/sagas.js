import { put, takeEvery } from "redux-saga/effects";

import CounterActionTypes from "./counter.types";

const delay = ms => new Promise(res => setTimeout(res, ms));

export function* incrementAsync() {
  console.info("Increment Async!");
  yield delay(2000);
  yield put(CounterActionTypes.INCREMENT);
}

export function* watchIncrementAsync() {
  yield takeEvery(CounterActionTypes.ASYNC, incrementAsync);
}

export function* fetchCollectionStart() {}
