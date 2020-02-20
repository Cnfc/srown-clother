import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";

import RootReducer from "./RootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [logger];

export const store = createStore(
  RootReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(...middlewares))
);
