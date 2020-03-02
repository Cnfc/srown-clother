import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import homeReducer from "./home/home.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "homeItem"]
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  homeItem: homeReducer
});

export default persistReducer(persistConfig, rootReducer);
