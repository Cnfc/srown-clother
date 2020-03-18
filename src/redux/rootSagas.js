import { watchIncrementAsync } from "redux/counter/sagas";

import { fetchCollectionAsync } from "redux/shop/shop.sagas";

export default function* rootSaga() {
  yield fetchCollectionAsync();
}
