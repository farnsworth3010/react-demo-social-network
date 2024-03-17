import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Posts } from "./Posts/Posts";
import { AddPost } from "./AddPost/AddPost";
import { Home } from "./Home/Home";
import { ViewPost } from "./ViewPost/ViewPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/post/:id",
        element: <ViewPost />,
      },
      {
        path: "/add-post",
        element: <AddPost />,
      },
    ],
  },
]);

export default router;
