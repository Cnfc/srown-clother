/* eslint-disable require-yield */
import { takeLatest, put, call, all } from "redux-saga/effects";

import {
  firestore,
  convertCollectionSnapshotToMap
} from "firebase/firebase.utils";
import {
  fetchCollectionSuccess,
  fetchCollectionFail,
  fetchCollectionStart
} from "./shop.actions";
import ShopActionTypes from "./shop.types";

export function* fetchCollections() {
  console.log("fetchSagaWorks");
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot);
    yield put(fetchCollectionSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionFail(error.message));
  }
}

export function* onfetchCollectionsStart() {
  yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollections);
}

export function* shopSagas() {
  yield all([call(fetchCollectionStart)]);
}
