import ShopActionTypes from "./shop.types";

import {
  firestore,
  convertCollectionSnapshotToMap
} from "firebase/firebase.utils";

export const fetchCollectionStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionSuccess = collectionMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionMap
});

export const fetchCollectionFailure = error => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAIL,
  payload: error
});

export const fetchCollectionStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionStart());

    collectionRef
      .get()
      .then(snapshot => {
        const collectionMap = convertCollectionSnapshotToMap(snapshot);

        dispatch(fetchCollectionSuccess(collectionMap));
      })
      .catch(error => dispatch(fetchCollectionStart(error.message)));
  };
};
