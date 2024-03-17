import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import s from "./Home.module.scss";
export const Home = () => {
  return (
    <>
      <h2 className="header">Home</h2>
      <div className={s.btns}>
        <Link to={"/posts"}>
          <Button variant="contained">View Posts</Button>
        </Link>
        <Link to={"/add-post"}>
          <Button variant="contained">Add post</Button>
        </Link>
      </div>
    </>
  );
};
