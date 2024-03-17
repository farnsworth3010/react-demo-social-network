import { createSlice } from "@reduxjs/toolkit";
import { apiUrl } from "../../utils/constants/apiUrl";
import { AppDispatch } from "../store";
import { IPost } from "../../interfaces/post";
import { IStatus } from "../../interfaces/status";
import type { PayloadAction } from "@reduxjs/toolkit";

interface state {
  post: IPost;
  status: IStatus;
}

const initialState: state = {
  post: {
    creation_date: null,
    id: "",
    text: "",
    title: "",
  },
  status: "idle",
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPost(state, action: PayloadAction<IPost>) {
      state.post = action.payload;
    },
    setStatus(state, action: PayloadAction<IStatus>) {
      state.status = action.payload;
    },
  },
});

export const { setPost, setStatus } = postSlice.actions;

export const fetchPostById = (id: string) => (dispatch: AppDispatch) => {
  fetch(apiUrl + "posts/" + id).then(async (response) => {
    const post = await response.json();
    dispatch(setPost(post));
    dispatch(setStatus("succeed"));
  });
};

export default postSlice.reducer;
