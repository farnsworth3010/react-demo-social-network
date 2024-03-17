import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./slices/postsSlice";
import postSlice from "./slices/postSlice";

export const store = configureStore({
  reducer: { posts: postsSlice, post: postSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
