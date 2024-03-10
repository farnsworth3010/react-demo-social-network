import { Modal, Box } from "@mui/material";
import { Product } from "../../../interfaces/product";
import { EditProductForm } from "../../forms/EditProduct/EditProductForm";

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
  data: Product;
  edit: (product: Product) => void;
}
export const EditProductModal = (props: Props) => {
  const { open, close, data, edit } = props;
  return (
    <Modal
      open={open}
      onClose={close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <EditProductForm data={data} close={close} submit={edit} />
      </Box>
    </Modal>
  );
};
