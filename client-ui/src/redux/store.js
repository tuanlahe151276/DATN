import { configureStore } from "@reduxjs/toolkit";
import { authSlice, postSlice, showSlice, userSlice } from "./slice";
const store = configureStore({
  reducer: {
    auth: authSlice,
    post: postSlice,
    user: userSlice,
    show: showSlice,
  },
});
export default store;
