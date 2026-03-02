import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import authReducer from "./authSlice";
const store = configureStore({
  reducer: {
    cartReducer,
    auth: authReducer,
  },
});
export default store;
