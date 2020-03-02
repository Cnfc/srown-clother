import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import homeReducer from "./home/home.reducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  homeItem: homeReducer
});
