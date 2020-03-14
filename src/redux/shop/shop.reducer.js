import ShopActionTypes from "./shop.types";
import produce from "immer";

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: null
};

const shopReducer = produce((draft, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      draft.isFetching = true;
      return;

    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      draft.isFetching = false;
      draft.collections = action.payload;
      return;

    case ShopActionTypes.FETCH_COLLECTIONS_FAIL:
      draft.isFetching = false;
      draft.errorMessage = action.payload;
      return;

    default:
      return;
  }
}, INITIAL_STATE);

export default shopReducer;
