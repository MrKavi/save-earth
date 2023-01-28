import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    postData: [],
  },
  reducers: {
    setPostData: (state, action) => {
      state.postData = action.payload;
    },
  },
});

export const { setPostData } = postSlice.actions;

export const selectPostData = (state) => state.post.postData;

export default postSlice.reducer;
