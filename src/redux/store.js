import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";
// import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";

// import { watchIncrementAsync } from "redux/counter/sagas";
import { fetchCollectionStart } from "redux/shop/shop.sagas";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  // middlewares.push(logger);
}

export const store = createStore(
  rootReducer,
  /* preloadedState, */
  composeEnhancers(applyMiddleware(...middlewares))
);

sagaMiddleware.run(fetchCollectionStart);

export const persistor = persistStore(store);

export default { store, persistor };
