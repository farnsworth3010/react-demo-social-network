import { Button, Stack, TextField } from "@mui/material";
import s from "./AddPostForm.module.scss";
import React, { useState } from "react";
import { INewPost } from "../../../interfaces/post";
import { useAppDispatch } from "../../../hooks/hooks";
import { setStatus } from "../../../store/slices/postsSlice";

interface Props {
  close: () => void;
  submit: (data: INewPost) => void;
}

export const AddPostForm = (props: Props) => {
  const { close, submit } = props;
  const [showValidation, setShowValidation] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const [data, setData] = useState<INewPost>({
    creation_date: new Date(),
    title: "",
    text: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (data.title && data.text) {
      submit({ ...data });
      dispatch(setStatus("idle"));
      close();
    } else {
      setShowValidation(true);
    }
  };

  const validate = (name: "title" | "text"): boolean => {
    return !data[name] && showValidation;
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        error={validate("title")}
        className={s.field}
        id="outlined-basic"
        onChange={handleChange}
        name="title"
        label="Title"
        value={data.title}
        variant="outlined"
      />
      <br />
      <TextField
        error={validate("text")}
        className={s.field}
        id="outlined-basic"
        onChange={handleChange}
        name="text"
        label="Text"
        value={data.text}
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
