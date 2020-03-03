import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import homeReducer from "./home/home.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "homeItem"]
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  homeItem: homeReducer,
  directory: directoryReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);
