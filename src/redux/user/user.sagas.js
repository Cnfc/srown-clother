/* eslint-disable require-yield */
import { takeLatest, put, all, call } from "redux-saga/effects";

import {
  googleSignInSuccess,
  googleSignInFailure
} from "redux/user/user.actions";

import UserActionTypes from "./user.types";

import {
  auth,
  googleProvider,
  createUserProfileDocument
} from "firebase/firebase.utils";

export function* signInWithGoogle() {
  try {
    const userRef = yield auth.signInWithPopup(googleProvider);
    console.log(userRef);
    // const userRef = yield call(createUserProfileDocument, user);
    // const userSnapshot = yield userRef.get();
    // yield put(
    //   googleSignInSuccess({
    //     id: userSnapshot.id,
    //     ...userSnapshot.data()
    //   })
    // );
  } catch (error) {
    yield put(googleSignInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart)]);
}
