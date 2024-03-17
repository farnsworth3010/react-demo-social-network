import { Button } from "@mui/material";
import { Post } from "../../components/Post/Post";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { IPost } from "../../interfaces/post";
import s from "./Posts.module.scss";
import {
  editPostApi,
  fetchPosts,
  removePostApi,
} from "../../store/slices/postsSlice";
import { useEffect, useState } from "react";
import { EditPostModal } from "../../components/modals/EditPost/EditPost";
import PostsSkeleton from "./PostsSkeleton/PostsSkeleton";
import { Link } from "react-router-dom";

export const Posts = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.posts);
  const handleRemove = (id: string) => {
    dispatch(removePostApi(id));
  };
  const [editData, setEditData] = useState<IPost>({
    id: "0",
    text: "",
    title: "",
    creation_date: null,
  });

  const [editOpen, setEditOpen] = useState<boolean>(false);

  const editClose = () => {
    setEditOpen(false);
  };

  const handleEditOpen = ({ id, title, text, creation_date }: IPost) => {
    setEditData({ id, title, text, creation_date });
    setEditOpen(true);
  };

  const editPostHandle = ({ id, title, text, creation_date }: IPost) => {
    dispatch(editPostApi({ id, title, text, creation_date }));
  };

  const posts = state.data
    .map((post: IPost) => {
      return (
        <Post
          creation_date={post.creation_date!}
          key={post.id}
          remove={handleRemove}
          postId={post.id}
          title={post.title}
          edit={handleEditOpen}
          text={post.text}
        />
      );
    })
    .reverse();

  useEffect(() => {
    if (state.status === "idle") {
      dispatch(fetchPosts());
    }
  }, [dispatch, state.status]);

  return (
    <div className={s.content}>
      <h2 className="header">Posts</h2>
      <div className={s.btns}>
        <Link to={"/"}>
          <Button variant="contained">Home</Button>
        </Link>
        <Link to={"/add-post"}>
          <Button variant="contained">Add post</Button>
        </Link>
      </div>
      <div className={s.posts}>
        {state.status === "succeed" && posts.length ? (
          posts
        ) : state.status === "idle" || state.status === "fetching" ? (
          <PostsSkeleton />
        ) : (
          <>empty</>
        )}
      </div>
      <EditPostModal
        close={editClose}
        data={editData}
        edit={editPostHandle}
        open={editOpen}
      />
    </div>
  );
};
