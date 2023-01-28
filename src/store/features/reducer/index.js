import { combineReducers, createSlice } from "@reduxjs/toolkit";
import postReducer from "./postReducer";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    createUser: (state, action) => {
      state.push({
        id: Date.now(),
        name: action.payload.name,
        age: action.payload.age,
        email: action.payload.email,
      });
    },
  },
});

export const rootReducer = combineReducers({
  user: userSlice.reducer,
  posts: postReducer,
});
export const { createUser } = userSlice.actions;
export default userSlice.reducer;
