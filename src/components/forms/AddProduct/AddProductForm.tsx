import { Button, Stack, TextField, Typography } from "@mui/material";
import s from "./AddProductForm.module.scss";
import React, { useState } from "react";
import { NewProduct } from "../../../interfaces/product";

interface Props {
  close: () => void;
  submit: (data: NewProduct) => void;
}

export const AddProductForm = (props: Props) => {
  const { close, submit } = props;
  const [showValidation, setShowValidation] = useState<boolean>(false);
  const [data, setData] = useState<NewProduct>({
    name: "",
    price: 0,
    amount: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (data.name && data.amount) {
      submit({ ...data });
      close();
    } else {
      setShowValidation(true);
    }
  };

  const validate = (name: "name" | "price" | "amount"): boolean => {
    return !data[name] && showValidation;
  };

  return (
    <>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Add product
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        <form onSubmit={handleSubmit}>
          <TextField
            error={validate("name")}
            className={s.field}
            id="outlined-basic"
            onChange={handleChange}
            name="name"
            label="Name"
            value={data.name}
            variant="outlined"
          />
          <TextField
            className={s.field}
            value={data.price}
            name="price"
            id="outlined-basic"
            onChange={handleChange}
            label="Price, $"
            type="number"
            variant="outlined"
          />
          <TextField
            className={s.field}
            error={validate("amount")}
            id="outlined-basic"
            value={data.amount}
            name="amount"
            onChange={handleChange}
            label="Amount, pc."
            type="number"
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
      </Typography>
    </>
  );
};
