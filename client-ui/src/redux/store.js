import { configureStore } from "@reduxjs/toolkit";
import { authSlice, postSlice, userSlice } from "./slice";
const store = configureStore({
  reducer: {
    auth: authSlice,
    post: postSlice,
    user: userSlice,
  },
});
export default store;
