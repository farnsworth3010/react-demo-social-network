import { useEffect, useState } from "react";
import { Post } from "../../components/Post/Post";
import { editPostApi, removePostApi } from "../../store/slices/postsSlice";
import s from "./ViewPost.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchPostById, setStatus } from "../../store/slices/postSlice";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Skeleton } from "@mui/material";
import { EditPostModal } from "../../components/modals/EditPost/EditPost";
import { IPost } from "../../interfaces/post";

export const ViewPost = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.post);
  const { id } = useParams();
  const navigate = useNavigate();
  const [editOpen, setEditOpen] = useState<boolean>(false);
  const [editData, setEditData] = useState<IPost>({
    id: "0",
    text: "",
    title: "",
    creation_date: null,
  });

  useEffect(() => {
    if (state.status === "fetching") {
      dispatch(fetchPostById(id!));
    }
  }, [dispatch, id, state.status]);

  useEffect(() => {
    dispatch(setStatus("fetching"));
  }, [dispatch, id]);

  const handleDelete = (id: string) => {
    dispatch(removePostApi(id));
    navigate("/posts");
  };

  const editClose = () => {
    setEditOpen(false);
  };

  const handleEditOpen = ({ id, title, text, creation_date }: IPost) => {
    setEditData({ id, title, text, creation_date });
    setEditOpen(true);
  };

  const editPostHandle = ({ id, title, text, creation_date }: IPost) => {
    dispatch(editPostApi({ id, title, text, creation_date }));
    dispatch(setStatus("fetching"));
  };

  return (
    <>
      <Link className={s.btn} to={"/posts"}>
        <Button variant="contained">Back to posts</Button>
      </Link>
      <EditPostModal
        close={editClose}
        data={editData}
        edit={editPostHandle}
        open={editOpen}
      />
      {state.post && state.status === "succeed" ? (
        <Post
          creation_date={state.post.creation_date!}
          postId={state.post.id}
          text={state.post.text}
          title={state.post.title}
          edit={handleEditOpen}
          remove={() => handleDelete(state.post.id)}
        />
      ) : (
        <div className={s.skeletonContainer}>
          <Skeleton sx={{ maxWidth: 700 }} />
          <Skeleton sx={{ maxWidth: 700 }} height={150} variant="rounded" />
        </div>
      )}
    </>
  );
};
