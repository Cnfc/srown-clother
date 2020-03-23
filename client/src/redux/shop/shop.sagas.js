/* eslint-disable require-yield */
import { takeLatest, put, call, all } from "redux-saga/effects";

import {
  firestore,
  convertCollectionSnapshotToMap
} from "firebase/firebase.utils";

import { fetchCollectionSuccess, fetchCollectionFailure } from "./shop.actions";
import ShopActionTypes from "./shop.types";

export function* fetchCollectionsAsync() {
  console.log("fetchSagaWorks");
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot);
    yield put(fetchCollectionSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionFailure(error.message));
  }
}

export function* fetchCollectionStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionStart)]);
}
