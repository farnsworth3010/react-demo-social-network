import {
  CardContent,
  Typography,
  CardActions,
  Button,
  Card,
  Box,
} from "@mui/material";
import { IPost } from "../../interfaces/post";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  text: string;
  postId: string;
  remove: (postId: string) => void;
  edit: ({ id, title, text, creation_date }: IPost) => void;
  creation_date: Date;
}
export const Post = (props: Props) => {
  const { title, text, postId, remove, edit, creation_date } = props;
  const date = new Date(creation_date);
  return (
    <Box sx={{ maxWidth: 700, margin: "0 auto", marginBottom: "1rem" }}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <Link to={"/post/" + postId}>{title}</Link>
            <br />
            {date.toLocaleDateString()}
          </Typography>
          <Typography variant="h5" component="div"></Typography>
          <Typography variant="body2">{text}</Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() =>
              edit({ id: postId, title, text, creation_date: creation_date })
            }
            size="small"
          >
            Edit
          </Button>
          <Button onClick={() => remove(postId)} size="small">
            Delete
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};
