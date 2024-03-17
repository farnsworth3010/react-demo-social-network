import { useNavigate } from "react-router-dom";
import { AddPostForm } from "../../components/forms/AddPost/AddPostForm";
import { INewPost } from "../../interfaces/post";
import { useAppDispatch } from "../../hooks/hooks";
import { addPostApi } from "../../store/slices/postsSlice";
import s from "./AddPost.module.scss";
export const AddPost = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = (data: INewPost) => {
    dispatch(addPostApi(data));
  };

  return (
    <>
      <h2 className="header">Add post</h2>
      <div className={s.formContainer}>
        <AddPostForm submit={handleSubmit} close={() => navigate("/posts")} />
      </div>
    </>
  );
};
