import axios from "axios";
import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";

export const allPost = createAsyncThunk("POSTS", () => {
  return axios
    .get("/api/post")
    .then((res) => res.data)
    .catch((err) => console.log(err));
});


export const deletePost= async (id)=>{
  const res = await axios.delete(`/api/post/${id}`)
  return res
}


const postReducer = createReducer(
  [],
  {
    [allPost.fulfilled]: (state, action) => action.payload,
    [deletePost.fulfilled]: (state, action) => action.payload,
  }
);

export default postReducer;
