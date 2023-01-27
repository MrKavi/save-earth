import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./features/reducer";

export const store = configureStore({
  reducer: rootReducer,
});
