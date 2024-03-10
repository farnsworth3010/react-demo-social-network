import { Button, Stack, TextField, Typography } from "@mui/material";
import s from "./EditProductForm.module.scss";
import React, { useState } from "react";
import { Product } from "../../../interfaces/product";

interface Props {
  data: Product;
  close: () => void;
  submit: (data: Product) => void;
}

export const EditProductForm = (props: Props) => {
  const { data, close, submit } = props;
  const [showValidation, setShowValidation] = useState<boolean>(false);
  const [newData, setNewData] = useState<Product>({
    id: data.id,
    name: data.name,
    price: data.price,
    amount: data.amount,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewData({ ...newData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newData.amount && newData.name) {
      submit({ ...newData });
      close();
    } else {
      setShowValidation(true);
    }
  };

  const validate = (name: "name" | "price" | "amount"): boolean => {
    return !newData[name] && showValidation;
  };

  return (
    <>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Edit product
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
            value={newData.name}
            variant="outlined"
          />
          <TextField
            className={s.field}
            value={newData.price}
            name="price"
            id="outlined-basic"
            onChange={handleChange}
            label="Price, $"
            type="number"
            variant="outlined"
          />
          <TextField
            error={validate("amount")}
            className={s.field}
            id="outlined-basic"
            value={newData.amount}
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
