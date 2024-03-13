import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userList: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserList: (state, action) => {
      state.userList = action.payload;
    },
    addToUserList: (state, action) => {
      state.userList?.push(action.payload);
    },
    deleteFromUserList: (state, action) => {
      state.userList?.push(action.payload);
    },
    resetUserList: (state) => {
      state.userList = null;
    },
  },
});
export const { setUserList, addToUserList, deleteFromUserList, resetUserList } =
  userSlice.actions;
export default userSlice.reducer;
