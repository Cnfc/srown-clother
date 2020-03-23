/* eslint-disable require-yield */
import { takeLatest, put, all, call } from "redux-saga/effects";

// import CartActionTypes from "redux/cart/cart.types";
import UserActionTypes from "redux/user/user.types";
import { clearCart } from "redux/cart/cart.actions";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
