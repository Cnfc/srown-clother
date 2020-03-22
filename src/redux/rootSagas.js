import { all, call } from "redux-saga/effects";

import { watchIncrementAsync } from "redux/counter/sagas";
import { userSagas } from "redux/user/user.sagas";

import { onfetchCollectionsStart } from "redux/shop/shop.sagas";

export default function* rootSaga() {
  yield all([
    call(onfetchCollectionsStart),
    call(userSagas),
    call(watchIncrementAsync)
  ]);
}
