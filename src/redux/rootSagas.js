import { all, call } from "redux-saga/effects";

import {
  watchIncrementAsync,
  incrementAsync,
  helloSaga
} from "redux/counter/sagas";

import { fetchCollectionAsync } from "redux/shop/shop.sagas";

export default function* rootSaga() {
  yield all([call(fetchCollectionAsync), watchIncrementAsync()]);
}
