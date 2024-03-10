import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Calc } from "./Calc/Calc";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Calc />,
      },
    ],
  },
]);

export default router;
