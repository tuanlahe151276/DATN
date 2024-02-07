import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const {
        _id = "",
        account,
        userName = "",
        role = 0,
        phoneNumber = "",
        address = "",
        gender = 1,
        avatar = "",
        dob = "",
        email = "",
        createdAt = "",
        access_token,
        refresh_token,
      } = action.payload;
      state.user = {
        id: _id,
        account: account,
        role: role,
        userName: userName || account,
        phoneNumber: phoneNumber,
        gender: gender,
        address: address,
        avatar: avatar,
        email: email,
        dob: dob,
        createdAt: createdAt,
        access_token: access_token,
        refresh_token: refresh_token,
      };
    },
    updateAccessToken: (state, action) => {
      state.user = {
        ...state.user,
        access_token: action.payload,
      };
    },
    updateUser: (state, action) => {
      state.user = {
        ...state.user,
        userName: action.payload.userName,
        phoneNumber: action.payload.phoneNumber,
        role: action.payload.role,
        gender: action.payload.gender,
        address: action.payload.address,
        email: action.payload.email,
        avatar: action.payload.avatar,
        dob: action.payload.dob,
      };
    },
    resetUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, updateAccessToken, updateUser, resetUser } =
  authSlice.actions;
export default authSlice.reducer;
