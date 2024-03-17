import { Modal, Box } from "@mui/material";
import { INewPost } from "../../../interfaces/post";
import { AddPostForm } from "../../forms/AddPost/AddPostForm";

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
  create: (post: INewPost) => void;
}

export const AddPostModal = (props: Props) => {
  const { open, close, create } = props;
  return (
    <Modal
      open={open}
      onClose={close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <AddPostForm close={close} submit={create} />
      </Box>
    </Modal>
  );
};
