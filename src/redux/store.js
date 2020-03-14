import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";
// import logger from "redux-logger";
import thunk from "redux-thunk";

import RootReducer from "./RootReducer";

import { loadCourses } from "redux/counter/counter.action";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
  // middlewares.push(logger);
}

export const store = createStore(
  RootReducer,
  /* preloadedState, */
  composeEnhancers(applyMiddleware(...middlewares))
);

store.dispatch(loadCourses());

export const persistor = persistStore(store);

export default { store, persistor };
