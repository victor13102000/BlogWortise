import { configureStore } from "@reduxjs/toolkit";


import userReducer from "./user";
import postReducer from "./post";


const store = configureStore({
  reducer: {
    user: userReducer,
    post: postReducer
  },
});

export default store;