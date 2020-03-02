import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";
// import logger from "redux-logger";

import RootReducer from "./RootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [];

export const store = createStore(
  RootReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);

export default { store, persistor };
