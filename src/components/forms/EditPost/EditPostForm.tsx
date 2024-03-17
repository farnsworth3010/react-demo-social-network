import { Button, Stack, TextField, Typography } from "@mui/material";
import s from "./EditPostForm.module.scss";
import React, { useState } from "react";
import { IPost } from "../../../interfaces/post";
import { useAppDispatch } from "../../../hooks/hooks";
import { setStatus } from "../../../store/slices/postsSlice";

interface Props {
  data: IPost;
  close: () => void;
  submit: (data: IPost) => void;
}

export const EditPostForm = (props: Props) => {
  const { data, close, submit } = props;
  const [showValidation, setShowValidation] = useState<boolean>(false);
  const [newData, setNewData] = useState<IPost>({
    creation_date: data.creation_date,
    id: data.id,
    title: data.title,
    text: data.text,
  });
  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewData({ ...newData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newData.title && newData.text) {
      submit({ ...newData });
      dispatch(setStatus("idle"));
      close();
    } else {
      setShowValidation(true);
    }
  };

  const validate = (name: "title" | "text"): boolean => {
    return !newData[name] && showValidation;
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography
        sx={{ marginBottom: "1rem" }}
        id="modal-modal-title"
        variant="h6"
        component="h2"
      >
        Edit product
      </Typography>
      <TextField
        error={validate("title")}
        className={s.field}
        id="outlined-basic"
        onChange={handleChange}
        name="title"
        label="Title"
        value={newData.title}
        variant="outlined"
      />
      <TextField
        className={s.field}
        value={newData.text}
        name="text"
        id="outlined-basic"
        onChange={handleChange}
        label="Text"
        variant="outlined"
      />
      <Stack spacing={2} direction="row">
        <Button type="submit" variant="contained">
          Apply
        </Button>
        <Button onClick={close} variant="contained">
          Cancel
        </Button>
      </Stack>
    </form>
  );
};
