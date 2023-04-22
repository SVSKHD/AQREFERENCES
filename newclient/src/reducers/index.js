import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./userReducer";
import { searchReducer } from "./searchReducer";
import { cartReducer } from "./cartReducer";
import { drawerReducer } from "./drawerReducer";
import { couponReducer } from "./couponReducer";
import { CODReducer } from "./CODReducer";
import {authDrawerReducer} from "./AuthDrawerAndDialog"

const rootReducer = combineReducers({
  user: userReducer,
  search: searchReducer,
  cart: cartReducer,
  drawer: drawerReducer,
  authDrawerAndDialog:authDrawerReducer,
  coupon: couponReducer,
  COD: CODReducer,
});

export default rootReducer;
