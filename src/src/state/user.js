import axios from "axios";
import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk("USER", () => {
  return axios
    .get("/api/auth/me")
    .then((res) => res.data)
    .catch((err) => console.log(err));
});

export const postLoginUser = createAsyncThunk("LOGIN_USER", (userObj) => {
  return axios
    .post("/api/auth/login", userObj, { withCredentials: true })
    .then((res) => res.data)
    .catch((err) => err.response.data);
});

export const postLogoutUser = createAsyncThunk("LOGOUT_USER", () => {
  return axios
    .post("/api/auth/logout", {withCredentials: true})
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
});

const userReducer = createReducer(
  {},
  {
    [getUser.fulfilled]: (state, action) => action.payload,
    [postLoginUser.fulfilled]: (state, action) => action.payload,
    [postLogoutUser.fulfilled]: (state, action) => action.payload,
  }
);

export default userReducer;
