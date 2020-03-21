/* eslint-disable require-yield */
import { takeLatest, put, call } from "redux-saga/effects";

import {
  firestore,
  convertCollectionSnapshotToMap
} from "firebase/firebase.utils";

import { fetchCollectionSuccess, fetchCollectionFail } from "./shop.actions";
import ShopActionTypes from "./shop.types";

export function* fetchCollectionAsync() {
  console.log("fetchSagaWorks");
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const callectionMap = yield call(convertCollectionSnapshotToMap, snapshot);

    yield put(fetchCollectionSuccess(callectionMap));
  } catch (error) {
    yield put(fetchCollectionFail(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionAsync
  );
}
