import { Modal, Box } from "@mui/material";
import { NewProduct } from "../../../interfaces/product";
import { AddProductForm } from "../../forms/AddProduct/AddProductForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface Props {
  open: boolean;
  close: () => void;
  create: (product: NewProduct) => void;
}

export const AddProductModal = (props: Props) => {
  const { open, close, create } = props;
  return (
    <Modal
      open={open}
      onClose={close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <AddProductForm close={close} submit={create} />
      </Box>
    </Modal>
  );
};
