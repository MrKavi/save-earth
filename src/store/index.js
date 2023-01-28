import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./features/reducer/postReducer";
import userReducer from "./features/reducer";

export const store = configureStore({
  reducer: {
    posts: postReducer,
    user: userReducer,
  },
});
