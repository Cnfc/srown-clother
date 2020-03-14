import { put, takeEvery, call } from "redux-saga/effects";

import {
  firestore,
  convertCollectionSnapshotToMap
} from "firebase/firebase.utils";

import { fetchCollectionSuccess, fetchCollectionFail } from "./shop.actions";
import ShopActionTypes from "./shop.types";

export function* fetchCollectionAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const callectionMap = yield call(convertCollectionSnapshotToMap, snapshot);
    yield put(fetchCollectionSuccess(callectionMap));
  } catch (error) {
    yield put(fetchCollectionFail(error.message));
  }

  // collectionRef
  //   .get()
  //   .then(snapshot => {
  //     const collectionMap = convertCollectionSnapshotToMap(snapshot);

  //     dispatch(fetchCollectionSuccess(collectionMap));
  //   })
  //   .catch(error => dispatch(fetchCollectionStart(error.message)));
}

export function* fetchCollectionStart() {
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionAsync
  );
}
