import { Modal, Box } from "@mui/material";
import { IPost } from "../../../interfaces/post";
import { EditPostForm } from "../../forms/EditPost/EditPostForm";

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
  data: IPost;
  edit: (product: IPost) => void;
}
export const EditPostModal = (props: Props) => {
  const { open, close, data, edit } = props;
  return (
    <Modal
      open={open}
      onClose={close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <EditPostForm data={data} close={close} submit={edit} />
      </Box>
    </Modal>
  );
};
