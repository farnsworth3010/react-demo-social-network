import { createSlice } from "@reduxjs/toolkit";
import { INewPost, IPost } from "../../interfaces/post";
import { AppDispatch, RootState } from "../store";
import type { PayloadAction } from "@reduxjs/toolkit";
import { apiUrl } from "../../utils/constants/apiUrl";
import { IStatus } from "../../interfaces/status";

interface state {
  data: IPost[];
  status: IStatus;
}

const initialState: state = {
  data: [],
  status: "idle",
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setStatus(state, action: PayloadAction<IStatus>) {
      state.status = action.payload;
    },
    setPosts(state, action: PayloadAction<IPost[]>) {
      state.data = action.payload;
      state.status = "succeed";
    },
    removePost(state, action: PayloadAction<string>) {
      state.data = state.data.filter((el: IPost) => el.id !== action.payload);
    },
    addPost(state, action: PayloadAction<IPost>) {
      state.data.push({
        title: action.payload.title,
        text: action.payload.text,
        creation_date: action.payload.creation_date,
        id: action.payload.id,
      });
    },
    editPost(state, action) {
      state.data = state.data.map((post: IPost) => {
        if (post.id === action.payload.id) {
          post.text = action.payload.text;
          post.title = action.payload.title;
          post.creation_date = action.payload.creation_date;
        }
        return post;
      });
    },
  },
});

export const { setPosts, removePost, editPost, addPost, setStatus } =
  postsSlice.actions;

export const fetchPosts = () => (dispatch: AppDispatch) => {
  fetch(apiUrl + "posts").then(async (response) => {
    const posts = await response.json();
    dispatch(setStatus("succeed"));
    dispatch(setPosts(posts));
  });
};

export const addPostApi = (post: INewPost) => () => {
  fetch(apiUrl + "posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(post),
  });
};

export const removePostApi = (id: string) => (dispatch: AppDispatch) => {
  fetch(apiUrl + "posts/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then(() => {
    dispatch(removePost(id));
  });
};

export const editPostApi =
  ({ id, title, text, creation_date }: IPost) =>
  (dispatch: AppDispatch) => {
    fetch(apiUrl + "posts/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ id, title, text, creation_date }),
    }).then(() => {
      dispatch(editPost({ id, title, text, creation_date }));
    });
  };

export const selectPosts = (state: RootState) => state.posts.data;

export default postsSlice.reducer;
