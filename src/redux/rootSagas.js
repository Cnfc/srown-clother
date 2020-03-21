import { all, call } from "redux-saga/effects";

import { watchIncrementAsync } from "redux/counter/sagas";
import { userSagas } from "redux/user/user.saga";

import { fetchCollectionAsync } from "redux/shop/shop.sagas";

export default function* rootSaga() {
  yield all([
    call(fetchCollectionAsync),
    call[userSagas],
    watchIncrementAsync()
  ]);
}
