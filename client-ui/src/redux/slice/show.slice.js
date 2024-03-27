import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showDropdownManageAccount: false,
};
const showSlice = createSlice({
  name: "show",
  initialState,
  reducers: {
    setShowDropdownManageAccount: (state, action) => {
      state.showDropdownManageAccount = action.payload;
    },
  },
});
export const { setShowDropdownManageAccount } = showSlice.actions;
export default showSlice.reducer;
