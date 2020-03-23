import { all, call } from "redux-saga/effects";

import { watchIncrementAsync } from "redux/counter/sagas";
import { userSagas } from "redux/user/user.sagas";
import { cartSagas } from "redux/cart/cart.sagas";
import { shopSagas } from "redux/shop/shop.sagas";

export default function* rootSaga() {
  yield all([
    call(userSagas),
    call(cartSagas),
    call(shopSagas),
    call(watchIncrementAsync)
  ]);
}
