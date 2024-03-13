import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postItem: null,
  postList: null,
};
const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    // postItem
    setPostItem: (state, action) => {
      state.postItem = action.payload;
    },
    resetPostItem: (state) => {
      state.postItem = null;
    },
    // postList
    setPostList: (state, action) => {
      state.postList = action.payload;
    },
    resetPostList: (state) => {
      state.postList = null;
    },
  },
});
export const { setPostItem, setPostList, resetPostItem, resetPostList } =
  postSlice.actions;
export default postSlice.reducer;
